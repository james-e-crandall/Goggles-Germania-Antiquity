// Panel you want to modify
import { U as UnitPromotion } from '/base-standard/ui/unit-promotion/model-unit-promotion.chunk.js';

UnitPromotion.iconClassMap.LOC_DISCIPLINE_ARMY_ARMINIUS_NAME = "promotion-assault";

engine.whenReady.then(() => {
  const updateModel = () => {
    engine.updateWholeModel(UnitPromotion);
  };
  engine.createJSModel("g_UnitPromotion", UnitPromotion);
  UnitPromotion.updateCallback = updateModel;
});