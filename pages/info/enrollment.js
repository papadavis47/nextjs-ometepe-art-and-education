import Construction from "../../src/components/Construction/Construction.js";
import { useAppContext } from "../../src/Context/appContext.js";

const Enrollment = () => {
  const { spanish } = useAppContext();
  return (
    <div>
      <Construction title={spanish ? "Próximamente . . ." : "Coming Soon . . ."} />
    </div>
  );
};

export default Enrollment;
