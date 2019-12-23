import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { actions } from '../actions/app';
export interface ServiceState {
  list: { [key: string]: string }[];
}

export const initialState: ServiceState = {
  list: [
    {
      image_src: 'http://horiguchi-seni.com/static/images/service/iron.jpg',
      title: 'クリーニング付リース',
      summary: 'ユニフォームのクリーニング付きリース',
      label_en: 'Cleaning&Lease',
      label_ja: 'クリーニング付リースについて',
      link: '/service/cleaning-lease'
    },
    {
      image_src:
        'http://horiguchi-seni.com/static/images/service/machine-quilting.jpg',
      title: '縫製・販売',
      summary: '生地・デザインの選定からユニフォームを縫製販売',
      label_en: 'Sewing & Sales',
      label_ja: '縫製・販売について',
      link: '/service/sewing'
    },
    {
      image_src: 'http://horiguchi-seni.com/static/images/service/name.jpg',
      title: 'ユニフォーム販売',
      summary: 'メーカー品のユニフォームをにて特別価格にて販売',
      label_en: 'Sales',
      label_ja: '販売について',
      link: '/service/sales'
    }
  ]
};

export const serviceReducer = reducerWithInitialState(initialState);
