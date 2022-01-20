import Porta from "../components/porta/Porta";
import Presente from "../components/presente/Presente";

export default function Home() {
  return (
    <div style={{display: "flex"}}>
      <Porta selecionada />
      <Porta />
    </div>
  )
}
