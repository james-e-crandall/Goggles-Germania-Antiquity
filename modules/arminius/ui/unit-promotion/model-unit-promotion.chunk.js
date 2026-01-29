// Panel you want to modify
import { U as UnitPromotion } from '/base-standard/ui/unit-promotion/model-unit-promotion.chunk.js';

UnitPromotion.iconClassMap.LOC_DISCIPLINE_ARMY_ARMINIUS_NAME = "promotion-assault";
UnitPromotion.iconClassMap.LOC_DISCIPLINE_ARMY_OTTO_NAME = "promotion-bastion";
UnitPromotion.iconClassMap.LOC_DISCIPLINE_SQUADRON_RICHTHOFEN_NAME = "promotion-dogfighting";

engine.whenReady.then(() => {
  const updateModel = () => {
    engine.updateWholeModel(UnitPromotion);
  };
  engine.createJSModel("g_UnitPromotion", UnitPromotion);
  UnitPromotion.updateCallback = updateModel;
});