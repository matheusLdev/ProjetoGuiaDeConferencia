import {Conference} from '../types';

export type RootStackParamList = {
  Home: undefined;
  ConferenceGuide: undefined;
  HistoryConferenceGuide: undefined;
  EditRegister: undefined;
  SeeConferenceGuide: {conference: Conference};
};
