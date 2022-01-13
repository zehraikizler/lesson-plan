import html2canvas from "html2canvas";
import html2pdf from "html2pdf.js";
function Navbar() {
  function saveLessonPlan(type) {
    const el = document.getElementById("result");

    if (type === "pdf") {
      el.classList.remove("col-6");
      el.classList.add("col-12");
      el.classList.remove("bg-light");
      el.classList.add("bg-white");
      let opt = {
        margin: 10,
        filename: "lesson-plan.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: {
          unit: "mm",
          format: [280, 350],
          orientation: "portrait"
        }
      };
      html2pdf()
        .set(opt)
        .from(el)
        .save();
    }else {
      html2canvas(el, {}).then(canvas => {
        const img = canvas.toDataURL("image/jpeg");
        download(img);
      });
    }
  }

  function download(url) {
    let link = document.createElement("a");
    link.style.display = "none";
    link.href = url;
    link.download = "lesson-plan.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function style() {
    const el = document.getElementById("result");
    el.classList.remove("col-12");
    el.classList.add("col-6");
    el.classList.remove("bg-white");
    el.classList.add("bg-light");
  }

  const saveLessonPlanPdf = async () => {
    await saveLessonPlan("pdf");
    style();
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-light border-bottom mb-5">
        <div className="container-fluid d-flex justify-content-between">
          <div>
            <a
              className="btn btn-success dropdown-toggle"
              href="#"
              id="download_result"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Ders Planı İndir
            </a>
            <ul className="dropdown-menu" aria-labelledby="download_result">
              <li>
                <button className="dropdown-item" onClick={saveLessonPlanPdf}>
                  PDF Olarak İndir
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => saveLessonPlan("png")}
                >
                  PNG Olarak İndir
                </button>
              </li>
            </ul>
          </div>
          <div className="navbar-brand m-3 h1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-journal-text mx-2 mb-2"
              viewBox="0 0 16 16"
            >
              <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
              <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
              <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
            </svg>
            <span>Lesson plan</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
