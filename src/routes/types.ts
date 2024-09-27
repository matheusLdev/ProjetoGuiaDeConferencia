import {Conference} from '../types';

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  ConferenceGuide: undefined;
  HistoryConferenceGuide: undefined;
  EditRegister: undefined;
  SeeConferenceGuide: {conference: Conference};
};
