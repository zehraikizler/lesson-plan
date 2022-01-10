function LessonPlan({ form }) {
  return (
    <div className="col-6">
      <div className="colon bg-light p-2 shadow">
        <h1>{(form && form.title) || ""} Ders Planı</h1>

        <h3 className="mt-5 mb-3">Bölüm I</h3>
        <table>
          <tbody>
            <tr>
              <td className="fw-bold p-2">Dersin Adı</td>
              <td className="p-2">{(form && form.lessonName) || ""}</td>
            </tr>
            <tr>
              <td className="fw-bold p-2">Sınıf</td>
              <td className="p-2">{(form && form.class) || ""}</td>
            </tr>
            <tr>
              <td className="fw-bold p-2">Ünitenin Adı</td>
              <td className="p-2">{(form && form.nameUnit) || ""}</td>
            </tr>
            <tr>
              <td className="fw-bold p-2">Konu</td>
              <td className="p-2">{(form && form.subject) || ""}</td>
            </tr>
            <tr>
              <td className="fw-bold p-2">Önerilen Süre</td>
              <td className="p-2">{(form && form.duration) || ""}</td>
            </tr>
          </tbody>
        </table>

        <h3 className="mt-5 mb-3">Bölüm II</h3>
        <table>
          <tbody>
            <tr>
              <td className="fw-bold p-2">Öğrenci Kazanımları / Hedef ve Davranışları</td>
              <td className="p-2">{(form && form.earnings) || ""}</td>
            </tr>
            <tr>
              <td className="fw-bold p-2">Öğretme / Öğrenme Yöntem – Teknikleri</td>
              <td className="p-2">{(form && form.method) || ""}</td>
            </tr>
            <tr>
              <td className="fw-bold p-2">Kullanılan Eğitim Teknolojileri – Araç ve Gereçler </td>
              <td className="p-2">{(form && form.tools) || ""}</td>
            </tr>
            <tr>
              <td className="fw-bold p-2" colSpan="2">Giriş Bölümü</td>
            </tr>
            <tr>
              <td className="fw-bold p-2">Dikkat Çekme</td>
              <td className="p-2">{(form && form.drawAttention) || ""}</td>
            </tr>
            <tr>
              <td className="fw-bold p-2">Güdüleme</td>
              <td className="p-2">{(form && form.motivation) || ""}</td>
            </tr>
            <tr>
              <td className="fw-bold p-2">Gözden Geçirme</td>
              <td className="p-2">{(form && form.review) || ""}</td>
            </tr>
            <tr>
              <td className="fw-bold p-2" colSpan="2">Derse Geçiş</td>
            </tr>
            <tr>
              <td colSpan="2" className="p-2">{(form && form.transition) || ""}</td>
            </tr>
            <tr>
              <td className="fw-bold p-2" colSpan="2">Etkinlik</td>
            </tr>
            <tr>
              <td colSpan="2" className="p-2">{(form && form.activity) || ""}</td>
            </tr>
            <tr>
              <td className="fw-bold p-2" colSpan="2">Özet</td>
            </tr>
            <tr>
              <td colSpan="2" className="p-2">{(form && form.summary) || ""}</td>
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
              <td colSpan="2" className="p-2">{(form && form.measuring) || ""}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LessonPlan;
