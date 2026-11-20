# CV sources and exports

These Word documents are the authoritative, version-controlled sources:

- [English CV](Junhao_Liu_CV.docx)
- [Chinese CV](Junhao_Liu_CV_ZH.docx)

Their published PDF exports are:

- [English PDF](../public/Junhao_Liu_CV.pdf)
- [Chinese PDF](../public/Junhao_Liu_CV_ZH.pdf)

Edit the corresponding Word source first, then export its PDF. Commit the source
and PDF together. Dated copies outside this repository are distribution copies;
do not rebuild from an older dated document.

Before publishing, check:

1. The PDF remains two pages and contains no review comments.
2. The competition entry on page 2 visibly includes
   `github.com/AlexDrives/lingbot-competiton-fbfyfbf`.
3. That text has a PDF link annotation targeting
   `https://github.com/AlexDrives/lingbot-competiton-fbfyfbf`.
4. All existing project hyperlinks remain clickable; the English CV retains the
   Port-Ready Real2Sim description.
5. Run `npm run build`. After deployment, download the live PDFs and compare their
   SHA-256 hashes with the local exports. An HTTP 200 response alone is not enough.

The Chinese public source omits the phone number, matching its existing PDF.
