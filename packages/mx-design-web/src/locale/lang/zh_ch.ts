import { ALERT_LOCAL, ALERT_NAMESPACE } from '../../Alert/constants';
import { EMPTY_NAMESPACE, EMPTY_LOCAL } from '../../Empty/constants';
import { MODAL_LOCAL, MODAL_NAMESPACE } from '../../Modal/constants';
import { ZN_CH } from '../constants';

export const mx_zn_ch = {
  [EMPTY_NAMESPACE]: EMPTY_LOCAL[ZN_CH],
  [ALERT_NAMESPACE]: ALERT_LOCAL[ZN_CH],
  [MODAL_NAMESPACE]: MODAL_LOCAL[ZN_CH],
};
