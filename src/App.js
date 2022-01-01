import './App.css';
import React, {useState} from 'react';

function App() {
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

  const onChangeInput = (e) =>
  {
    setForm({...form, [e.target.name]: e.target.value})
  }

  return (
    <div className="App">

      <div className="colon" style={{width: "100%"}}>
        <h1>
          <input name="title" value={form.title} onChange={onChangeInput} /> Öğretimi Ders Planı
        </h1>

        <h3>Bölüm I</h3>
        <table>
          <tr>
            <td>Dersin Adı</td>
            <td><input name="lessonName" value={form.lessonName} onChange={onChangeInput} /></td>
          </tr>
          <tr>
          <td>Sınıf</td>
          <td><input name="class" value={form.class} onChange={onChangeInput} /></td>
          </tr>
          <tr>
            <td>Ünitenin Adı</td>
            <td><input name="nameUnit" value={form.nameUnit} onChange={onChangeInput} /></td>
          </tr>
          <tr>
            <td>Konu</td>
            <td><input name="subject" value={form.subject} onChange={onChangeInput} /></td>
          </tr>
          <tr>
            <td>Önerilen Süre</td>
            <td><input name="duration" value={form.duration} onChange={onChangeInput} /></td>
          </tr>
        </table>

        <h3>Bölüm II</h3>
        <table>
          <tr>
            <td>Öğrenci Kazanımları / Hedef ve Davranışları</td>
            <td><input name="earnings" value={form.earnings} onChange={onChangeInput} /></td>
          </tr>
          <tr>
          <td>Öğretme / Öğrenme Yöntem – Teknikleri</td>
          <td><input name="method" value={form.method} onChange={onChangeInput} /></td>
          </tr>
          <tr>
            <td>Kullanılan Eğitim Teknolojileri – Araç ve Gereçler </td>
            <td><input name="tools" value={form.tools} onChange={onChangeInput} /></td>
          </tr>
          <tr>
            <td colspan="2">Giriş Bölümü</td>
          </tr>
          <tr>
            <td>Dikkat Çekme</td>
            <td><input name="drawAttention" value={form.drawAttention} onChange={onChangeInput} /></td>
          </tr>
          <tr>
            <td>Güdüleme</td>
            <td><input name="motivation" value={form.motivation} onChange={onChangeInput} /></td>
          </tr>
          <tr>
          <td>Gözden Geçirme</td>
          <td><input name="review" value={form.review} onChange={onChangeInput} /></td>
          </tr>
          <tr>
            <td colspan="2">Derse Geçiş</td>
          </tr>
          <tr>
            <td colspan="2">
              <input name="transition" value={form.transition} onChange={onChangeInput} />
            </td>
          </tr>
          <tr>
            <td colspan="2">Etkinlik</td>
          </tr>
          <tr>
            <td colspan="2">
              <input name="activity" value={form.activity} onChange={onChangeInput} />
            </td>
          </tr>
          <tr>
            <td colspan="2">Özet</td>
          </tr>
          <tr>
            <td colspan="2">
              <input name="summary" value={form.summary} onChange={onChangeInput} />
            </td>
          </tr>
        </table>

        <h3>Bölüm III</h3>
        <table>
        <tr>
            <td colspan="2">Ölçme Değerlendirme</td>
          </tr>
          <tr>
            <input name="measuring" value={form.measuring} onChange={onChangeInput} />
          </tr>
        </table>
      </div>

      <div className="colon" style={{width: "100%"}}>
        <h1>
          {form.title} Öğretimi Ders Planı
        </h1>

        <h3>Bölüm I</h3>
        <table>
          <tr>
            <td>Dersin Adı</td>
            <td>{form.lessonName}</td>
          </tr>
          <tr>
          <td>Sınıf</td>
          <td>{form.class}</td>
          </tr>
          <tr>
            <td>Ünitenin Adı</td>
            <td>{form.nameUnit}</td>
          </tr>
          <tr>
            <td>Konu</td>
            <td>{form.subject}</td>
          </tr>
          <tr>
            <td>Önerilen Süre</td>
            <td>{form.duration}</td>
          </tr>
        </table>

        <h3>Bölüm II</h3>
        <table>
          <tr>
            <td>Öğrenci Kazanımları / Hedef ve Davranışları</td>
            <td>{form.earnings}</td>
          </tr>
          <tr>
          <td>Öğretme / Öğrenme Yöntem – Teknikleri</td>
          <td>{form.method}</td>
          </tr>
          <tr>
            <td>Kullanılan Eğitim Teknolojileri – Araç ve Gereçler </td>
            <td>{form.tools}</td>
          </tr>
          <tr>
            <td colspan="2">Giriş Bölümü</td>
          </tr>
          <tr>
            <td>Dikkat Çekme</td>
            <td>{form.drawAttention}</td>
          </tr>
          <tr>
            <td>Güdüleme</td>
            <td>{form.motivation}</td>
          </tr>
          <tr>
          <td>Gözden Geçirme</td>
          <td>{form.review}</td>
          </tr>
          <tr>
            <td colspan="2">Derse Geçiş</td>
          </tr>
          <tr>
            <td colspan="2">
              {form.transition}
            </td>
          </tr>
          <tr>
            <td colspan="2">Etkinlik</td>
          </tr>
          <tr>
            <td colspan="2">
              {form.activity}
            </td>
          </tr>
          <tr>
            <td colspan="2">Özet</td>
          </tr>
          <tr>
            <td colspan="2">
             {form.summary}
            </td>
          </tr>
        </table>

        <h3>Bölüm III</h3>
        <table>
        <tr>
            <td colspan="2">Ölçme Değerlendirme</td>
          </tr>
          <tr>
            {form.measuring}
          </tr>
        </table>
      </div>

    </div>
  );
}

export default App;