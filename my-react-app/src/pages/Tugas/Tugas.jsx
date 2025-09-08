import "../../Global.css";
import styles from "./Tugas.module.css";
import Matkul from "./Matkul/Matkul.jsx";

function Tugas() {
  return (
    <>
      <header>
        <ul
          className={`${styles.navigator_list} ${styles.head_title} ${styles.ul_hoverable}`}
        >
          <li>Beranda</li>
          <li className={styles.arrow}>-</li>
          <li className={styles.current_position}>Tugas</li>
        </ul>
      </header>
      <main>
        <ul className={styles.cathegory_list}>
          <li>
            <h1 className={styles.cathegory_name} id="tugas">
              Tugas [0]
            </h1>
            <div className={styles.matkul_list}>
              <div className={styles.matkul_list_wrapper}>
                <Matkul
                  matkulId="tugas"
                  matkulIdx={0}
                  matkulName="Praktikum Konsep Pemrograman"
                />
                <Matkul
                  matkulId="tugas"
                  matkulIdx={1}
                  matkulName="Dasar Sistem Komputer"
                />
              </div>
            </div>
          </li>
          <li>
            <h1 className={styles.cathegory_name} id="materi">
              Materi [0]
            </h1>
            <div className={styles.matkul_list}>
              <div className={styles.matkul_list_wrapper}>
                <Matkul matkulName="Konsep Teknologi Informasi" />
              </div>
            </div>
          </li>
          <li>
            <h1 className={styles.cathegory_name} id="latihan">
              Latihan [0]
            </h1>
            <div className={styles.matkul_list}>
              <div className={styles.matkul_list_wrapper}>
                <Matkul matkulId="latihan" matkulCount={0} />
              </div>
            </div>
          </li>
        </ul>
      </main>
    </>
  );
}

export default Tugas;
