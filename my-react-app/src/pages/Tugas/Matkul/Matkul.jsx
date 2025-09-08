import styles from "../Tugas.module.css";

function Matkul({
  matkulCount = 1,
  matkulId = "tugas",
  matkulIdx = 0,
  matkulName = "Nama Mata Kuliah",
  matkulAssignment = "Rabu, 31 Desember 2025, 23:59:59 WIB",
  matkulDeadline = "Rabu, 31 Desember 2025, 23:59:59 WIB",
}) {
  let contentEl;
  if (matkulCount > 0) {
    let deadlineEl;
    if (matkulId == "tugas") {
      deadlineEl = (
        <>
          <h3>Deadline: </h3>
          <p>{matkulDeadline}</p>
        </>
      );
    } else {
      deadlineEl = "";
    }

    contentEl = (
      <>
        <thead>
          <tr className={styles.matkul_header}>
            <td className={styles.matkul_header_number}>
              <h2>{matkulIdx + 1}.</h2>
            </td>
            <td className={styles.matkul_header_name}>
              <h2>{matkulName}</h2>
            </td>
            <td className={styles.matkul_header_deadline}>
              <h2>{matkulDeadline}</h2>
            </td>
            <td className={styles.arrow_indicator}>
              <h2>{">"}</h2>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.matkul_content}>
            <td className={styles.matkul_content_explanation} colSpan="2">
              <h3>Deskripsi: </h3>
              <p className={styles.explanation_description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, nihil corporis, harum illum eos deserunt consectetur
                cumque perferendis obcaecati numquam voluptas in, possimus
                consequatur laboriosam fuga repudiandae. Tempora, nesciunt
                quasi.
              </p>
              <h3>Link: </h3>
              <a className={styles.explanation_link} href="#" target="_blank">
                gedagedigedageda.oh
              </a>
            </td>
            <td className={styles.matkul_content_timestamp} colSpan="2">
              <h3>Assignment: </h3>
              <p>{matkulAssignment}</p>
              {deadlineEl}
            </td>
          </tr>
        </tbody>
      </>
    );
  } else {
    contentEl = (
      <thead>
        <tr>
          <td>
            <h2>
              <i>Tidak ada {matkulId}</i>
            </h2>
          </td>
        </tr>
      </thead>
    );
  }

  return <table className={styles.matkul}>{contentEl}</table>;
}

export default Matkul;
