# Design direction

Audience: engineering recruiters, collaborators, and the course instructor. The first screen must establish Abdallah's discipline, show how he thinks, and lead to real projects.

The UI/UX Pro Max search for `engineering portfolio minimal` recommended a spacious Swiss layout with monochrome contrast and restrained interactions. Keep those principles; replace its stock blue accent and software feature pattern with a burgundy engineering annotation color and a project-driven narrative. Frontend-design guidance informed the asymmetric composition and the choice to spend visual emphasis on one exploded headlight assembly rather than repeated decorated cards.

Updated tokens: pale mint #edf4f2, white #ffffff, navy ink #203a43, slate #50686f, burgundy #8a3656, teal #206d72, and ochre #8b5f25. Dark mode uses deep navy #14252d, light text #eff5f3, pale rose #f1aec5, and teal #8ad0ce. Archivo headings, system sans-serif body. Body line length at most 70 characters; 16–18px body; 44px minimum controls.

Home: compact header, large left-aligned introduction beside an exploded headlight, selected work, then a three-stage sticky story, a short background, and contact. About: education, actual experience, interests. Projects: four detailed case studies with explicit roles, methods, and limitations. Skills: grouped evidence tied to actual projects. Contact: email, LinkedIn, GitHub, and a validated email-draft form.

Motion now follows the owner's request for a richer presentation: cached scroll geometry drives the assembly continuously in either direction, rather than depending on section-entry events. The final state crossfades into the real prototype photograph. A compact sticky visual remains visible on phones. No scroll lock or external animation dependency is used. A pausable two-row skills ribbon and small fine-pointer companion ring add motion; the native cursor remains visible. OS reduced motion and a persistent on-page motion control remove nonessential animation, disable the ribbon/cursor, and return the story to ordinary flow.

Protolight now uses genuine prototype photos and CAD images extracted from the supplied capstone notebook. Its explanatory SVG matches the actual L-shaped printed enclosure, LED channels, and sensor placement. The professional and graduation photos retain their original appearance; equal circular headshot frames are cropped with CSS and switch through an explicit flip button. LinkedIn appears in every header and on the portrait pages. See docs/MEDIA.md for provenance. Other project illustrations remain labeled placeholders. Do not publish the original resume, phone number, ZIP code, or street address.

References: [UI/UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill), [Vercel Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines), [Archivo](https://github.com/Omnibus-Type/Archivo). No third-party website template or framework is copied.
