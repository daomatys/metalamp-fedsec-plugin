import { ISliderOptionsList } from '../../assets/types/plugin';
import Model from '../../components/model/model';
import View from '../../components/view/view';

class Presenter {
  options: ISliderOptionsList;
  
  constructor(options:ISliderOptionsList) {
    this.options = options;
    initModel();
    initView();
  }

  initModel() {
    this.model = new Model();
  }

  initView() {
    this.view = new View();
  }
}

export default Presenter;
