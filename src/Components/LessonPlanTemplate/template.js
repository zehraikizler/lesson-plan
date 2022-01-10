import React, { useState } from "react";

function LessonPlanTemplate(props) {
  const [form, setForm] = useState({
    title: "",
    lessonName: "",
    class: "",
    nameUnit: "",
    subject: "",
    duration: "",
    earnings: "",
    method: "",
    tools: "",
    drawAttention: "",
    motivation: "",
    review: "",
    transition: "",
    activity: "",
    measuring: ""
  });

  const onChangeInput = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    props.onChangeForm({ ...form, [e.target.name]: e.target.value });
  };

  // useEffect(() => {
  //     const tdHtmlElements = document.getElementsByTagName('td');
  //     console.log(tdHtmlElements);
  //     const tdElements = [];
  //     for(let i=0; i<tdHtmlElements.length; i++){
  //       tdElements.push(tdHtmlElements[i]);
  //     }
  //     console.log(tdElements.split(""));
  //   }, []);

  return (
    <div className="col-6">
      <div className="colon bg-light p-2 shadow">
        <h1>
          <input name="title" value={form.title} onChange={onChangeInput} style={{ width: "40%", height: "48px" }} />
          Ders Planı
        </h1>

        <h3 className="mt-5 mb-3">Bölüm I</h3>
        <table>
          <tbody>
            <tr>
              <td className="fw-bold p-2">Dersin Adı</td>
              <td>
              <input
                  className="form-control" 
                  name="lessonName"
                  value={form.lessonName}
                  onChange={onChangeInput} /> 
              </td>
            </tr>
            <tr>
              <td className="fw-bold p-2">Sınıf</td>
              <td>
                <input
                  className="form-control" 
                  name="class"
                  value={form.class}
                  onChange={onChangeInput}
                />
              </td>
            </tr>
            <tr>
              <td className="fw-bold p-2">Ünitenin Adı</td>
              <td>
                <input
                  className="form-control"
                  name="nameUnit"
                  value={form.nameUnit}
                  onChange={onChangeInput}
                />
              </td>
            </tr>
            <tr>
              <td className="fw-bold p-2">Konu</td>
              <td>
                <input
                  className="form-control"
                  name="subject"
                  value={form.subject}
                  onChange={onChangeInput}
                />
              </td>
            </tr>
            <tr>
              <td className="fw-bold p-2">Önerilen Süre</td>
              <td>
                <input
                  className="form-control"
                  name="duration"
                  value={form.duration}
                  onChange={onChangeInput}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <h3 className="mt-5 mb-3">Bölüm II</h3>
        <table>
          <tbody>
            <tr>
              <td className="fw-bold p-2">Öğrenci Kazanımları / Hedef ve Davranışları</td>
              <td>
                <textarea
                  className="form-control"
                  name="earnings"
                  value={form.earnings}
                  onChange={onChangeInput}
                />
              </td>
            </tr>
            <tr>
              <td className="fw-bold p-2">Öğretme / Öğrenme Yöntem – Teknikleri</td>
              <td>
                <textarea
                  className="form-control"
                  name="method"
                  value={form.method}
                  onChange={onChangeInput}
                />
              </td>
            </tr>
            <tr>
              <td className="fw-bold p-2">Kullanılan Eğitim Teknolojileri – Araç ve Gereçler </td>
              <td>
                <textarea
                  className="form-control"
                  name="tools"
                  value={form.tools}
                  onChange={onChangeInput}
                />
              </td>
            </tr>
            <tr>
              <td className="fw-bold p-2" colSpan="2">Giriş Bölümü</td>
            </tr>
            <tr>
              <td className="fw-bold p-2">Dikkat Çekme</td>
              <td>
                <textarea
                  className="form-control"
                  name="drawAttention"
                  value={form.drawAttention}
                  onChange={onChangeInput}
                />
              </td>
            </tr>
            <tr>
              <td className="fw-bold p-2">Güdüleme</td>
              <td>
                <textarea
                  className="form-control"
                  name="motivation"
                  value={form.motivation}
                  onChange={onChangeInput}
                />
              </td>
            </tr>
            <tr>
              <td className="fw-bold p-2">Gözden Geçirme</td>
              <td>
                <textarea
                  className="form-control"
                  name="review"
                  value={form.review}
                  onChange={onChangeInput}
                />
              </td>
            </tr>
            <tr>
              <td className="fw-bold p-2" colSpan="2">Derse Geçiş</td>
            </tr>
            <tr>
              <td colSpan="2">
                <textarea
                  className="form-control"
                  name="transition"
                  value={form.transition}
                  onChange={onChangeInput}
                />
              </td>
            </tr>
            <tr>
              <td className="fw-bold p-2" colSpan="2">Etkinlik</td>
            </tr>
            <tr>
              <td colSpan="2">
                <textarea
                  className="form-control"
                  name="activity"
                  value={form.activity}
                  onChange={onChangeInput}
                />
              </td>
            </tr>
            <tr>
              <td className="fw-bold p-2" colSpan="2">Özet</td>
            </tr>
            <tr>
              <td colSpan="2">
                <textarea
                  className="form-control"
                  name="summary"
                  value={form.summary}
                  onChange={onChangeInput}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <h3 className="mt-5 mb-3">Bölüm III</h3>
        <table>
          <tbody>
            <tr>
              <td className="fw-bold p-2" colSpan="2">Ölçme Değerlendirme</td>
            </tr>
            <tr>
              <td colSpan="2">
                <textarea
                  className="form-control"
                  name="measuring"
                  value={form.measuring}
                  onChange={onChangeInput}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LessonPlanTemplate;
