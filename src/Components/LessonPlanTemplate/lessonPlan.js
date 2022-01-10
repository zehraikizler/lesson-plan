
function LessonPlan({form}) {
    return (
        <div>
             <div className="colon" style={{width: "100%"}}>
                <h1>
                {(form && form.title) || ""} Öğretimi Ders Planı
                </h1>

                <h3>Bölüm I</h3>
                <table>
                <tr>
                    <td>Dersin Adı</td>
                    <td>{(form && form.lessonName) || ""}</td>
                </tr>
                <tr>
                <td>Sınıf</td>
                <td>{(form && form.class) || ""}</td>
                </tr>
                <tr>
                    <td>Ünitenin Adı</td>
                    <td>{(form && form.nameUnit) || ""}</td>
                </tr>
                <tr>
                    <td>Konu</td>
                    <td>{(form && form.subject) || ""}</td>
                </tr>
                <tr>
                    <td>Önerilen Süre</td>
                    <td>{(form && form.duration) || ""}</td>
                </tr>
                </table>

                <h3>Bölüm II</h3>
                <table>
                <tr>
                    <td>Öğrenci Kazanımları / Hedef ve Davranışları</td>
                    <td>{(form && form.earnings) || ""}</td>
                </tr>
                <tr>
                <td>Öğretme / Öğrenme Yöntem – Teknikleri</td>
                <td>{(form && form.method) || ""}</td>
                </tr>
                <tr>
                    <td>Kullanılan Eğitim Teknolojileri – Araç ve Gereçler </td>
                    <td>{(form && form.tools) || ""}</td>
                </tr>
                <tr>
                    <td colspan="2">Giriş Bölümü</td>
                </tr>
                <tr>
                    <td>Dikkat Çekme</td>
                    <td>{(form && form.drawAttention) || ""}</td>
                </tr>
                <tr>
                    <td>Güdüleme</td>
                    <td>{(form && form.motivation) || ""}</td>
                </tr>
                <tr>
                <td>Gözden Geçirme</td>
                <td>{(form && form.review) || ""}</td>
                </tr>
                <tr>
                    <td colspan="2">Derse Geçiş</td>
                </tr>
                <tr>
                    <td colspan="2">
                    {(form && form.transition) || ""}
                    </td>
                </tr>
                <tr>
                    <td colspan="2">Etkinlik</td>
                </tr>
                <tr>
                    <td colspan="2">
                    {(form && form.activity) || ""}
                    </td>
                </tr>
                <tr>
                    <td colspan="2">Özet</td>
                </tr>
                <tr>
                    <td colspan="2">
                    {(form && form.summary) || ""}
                    </td>
                </tr>
                </table>

                <h3>Bölüm III</h3>
                <table>
                <tr>
                    <td colspan="2">Ölçme Değerlendirme</td>
                </tr>
                <tr>
                    {(form && form.measuring) || ""}
                </tr>
                </table>
            </div>

        </div>
    );
}

export default LessonPlan;