import AtelieSkemaView from "./views/AtelieSkemaView";
import { useAtelieSkemaController } from "./controllers/useAtelieSkemaController";
import { atelieSkemaModel } from "./models/atelieSkemaModel";

export default function AtelieSkemaPage() {
  const controller = useAtelieSkemaController();

  return <AtelieSkemaView {...atelieSkemaModel} {...controller} />;
}
