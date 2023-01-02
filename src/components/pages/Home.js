import styles from "./Home.module.css";
import saving from "../../img/saving.svg";
import LinkButton from "../layouts/LinkButton";

function Home() {
  return (
    <section className={styles.homeContainer}>
      <h1>
        Bem-vindo ao <span>Costs</span>
      </h1>
      <p>Começe a grenciar seus projetos agora mesmo!</p>
      <LinkButton to="/newproject" text="Criar Projeto" />
      <img src={saving} alt="Costs"></img>
    </section>
  );
}

export default Home;
