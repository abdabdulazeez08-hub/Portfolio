# Optional documentation tooling; not required by the static website.
from pathlib import Path
import json
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import Paragraph
from pypdf import PdfReader

root=Path.cwd();evidence=json.loads((root/'docs/project-story-regression-results.json').read_text(encoding='utf-8'))
audits=evidence.get('liveLighthouse',[])
assert len(audits)==5 and all(r['accessibility']>=90 for r in audits), 'Record current live Lighthouse results first.'
new=json.loads((root/'docs/project-story-live-results.json').read_text(encoding='utf-8'))
assert all(r['result']=='Pass' for r in new['results'])
assert len(evidence.get('liveCore',[]))==41 and all(r['result']=='Pass' for r in evidence['liveCore'])
assert len(evidence.get('liveHome',{}).get('results',[]))==15
out=root/'output/pdf/portfolio-report.pdf'
c=canvas.Canvas(str(out),pagesize=(612,792));c.setTitle('Abdallah Abdulazeez - Portfolio Development Report');c.setAuthor('Abdallah Abdulazeez; prepared with Codex assistance')
ink=HexColor('#203a43');muted=HexColor('#50686f');accent=HexColor('#8a3656');rule=HexColor('#c9dbd8')
body=ParagraphStyle('body',fontName='Helvetica',fontSize=9.8,leading=13.4,textColor=ink)
small=ParagraphStyle('small',parent=body,fontSize=8.5,leading=11.5,textColor=muted)
def paragraph(text,x,y,w,style=body):
 p=Paragraph(text,style);_,h=p.wrap(w,700);p.drawOn(c,x,y-h);return y-h
def section(title,text,y):
 c.setFillColor(accent);c.setFont('Helvetica-Bold',10.8);c.drawString(48,y,title)
 return paragraph(text,48,y-13,516)-19
def footer(n):
 c.setStrokeColor(rule);c.line(48,44,564,44);c.setFillColor(muted);c.setFont('Helvetica',8)
 c.drawString(48,30,'Abdallah Abdulazeez / Portfolio development / November 5, 2026');c.drawRightString(564,30,f'{n} / 2')
repo='https://github.com/abdabdulazeez08-hub/Portfolio';live='https://abdabdulazeez08-hub.github.io/Portfolio/'
c.setFillColor(accent);c.setFont('Helvetica',9)
for y,label,url in[(755,'Repository: ',repo),(739,'Live website: ',live)]:
 c.drawString(48,y,label+url);c.linkURL(url,(48,y-4,558,y+10),relative=0)
c.setFillColor(ink);c.setFont('Helvetica-Bold',27);c.drawString(48,690,'Abdallah Abdulazeez')
c.setFillColor(muted);c.setFont('Helvetica',12);c.drawString(48,669,'Personal portfolio website - development and verification report')
y=633
y=section('Website and features','Five linked pages present my introduction, education and experience, four projects, technical skills, and contact information. The public site uses plain HTML, one external CSS stylesheet, and vanilla JavaScript, with no build step or backend. Local Archivo headings and a mint, navy, teal, burgundy, and ochre palette support coordinated light/dark themes. About and Contact include a public resume PDF whose private contact header was removed.',y)
y=section('Actual project evidence and scroll stories','Home follows six Protolight chapters using an explanatory reconstruction and actual notebook CAD/build photographs. Projects adds four badge chapters, seven HafizAI chapters, and four tiller CAD views. Eighteen supplied media files replace the remaining project placeholders. Photos show the printed assembly and internal electronics; app captures show the interface; CAD views show a design rather than a fabricated machine. Screenshot scores are captured session values, not claims of general app accuracy.',y)
y=section('Responsive interaction and accessibility','Native scroll position selects each chapter using cached geometry and one queued animation frame, so scenes reverse reliably. Desktop pairs sticky images with copy; mobile frames useful details and offers full-image links. Reduced motion, short screens, print, and JavaScript-off use static chapters. Responsive navigation, skip links, visible keyboard focus, saved themes, portraits, a pausable ribbon, and a fine-pointer-only halo add optional interaction. The contact form validates input and prepares an email draft without sending or storing messages.',y)
y=section('Challenges and corrected Codex mistakes','The first generated mobile focus handler measured an offscreen stage position, leaving a link obscured. I replaced it with a safe offset based on the header and stage heights, then reserved caption space so wrapping cannot grow the panel over a focused control. Initial phone crops hid the illuminated acrylic; I adjusted CSS framing while preserving full source frames. A regression also caught shortened contact subjects; the descriptive project names were restored. Failed checks and successful retests remain in TESTING.md.',y)
y=section('Live verification and deployment','GitHub Pages publishes main from the repository root. The new 16-case story suite, 41-case all-page core suite, and 15-case Home interaction suite passed on the deployed source: 72 browser cases. Tests cover navigation, keyboard use, forward/reverse/jump scrolling, resize, reduced motion, themes, gestures, form errors and valid drafts, and no-JavaScript reading. Fresh live Lighthouse accessibility scores are 100 on all five pages. Direct-file opening and image-size/reference checks also passed locally. Machine evidence records dates and source versions.',y)
y=paragraph('Prepared with Codex assistance. HANDOFF.md documents the architecture, source media, verification, and remaining work; CODE_REVIEW.md explains the feature groups. The owner still needs to review the code and AGENTS.md, practice and perform the physical phone/laptop and keyboard demo, explain JavaScript, and submit this report. A public HafizAI URL/current release status is optional and has not been supplied. Commit history retains genuine dates.',48,y,516,small)
assert y>60, f'Page one overflow: {y}'
footer(1);c.showPage()
c.setFillColor(ink);c.setFont('Helvetica-Bold',25);c.drawString(48,741,'Actual work, in the browser.')
paragraph('Genuine live GitHub Pages captures from the November 5 project-story verification. Phone images use viewport emulation; the physical-device classroom demonstration remains an owner step.',48,720,516,small)
c.drawImage(str(root/'docs/screenshots/hafizai-story-desktop.jpg'),48,306,width=516,height=358.333)
c.setFillColor(muted);c.setFont('Helvetica',9);c.drawString(48,291,'HafizAI practice chapter / laptop / 1440 x 1000 CSS pixels')
for x,name,caption in[(48,'badge-story-mobile.jpg','Badge / phone'),(220,'hafizai-story-mobile.jpg','HafizAI / phone'),(392,'tiller-story-mobile.jpg','Tiller CAD / phone')]:
 c.drawImage(str(root/'docs/screenshots'/name),x,65,width=100,height=216.41)
 c.setFillColor(muted);c.setFont('Helvetica',8);c.drawString(x,54,caption)
footer(2);c.save();assert len(PdfReader(out).pages)==2
print(f'Report: 2 pages, {out.stat().st_size} bytes; page-one content ends at y={y:.1f}.')
