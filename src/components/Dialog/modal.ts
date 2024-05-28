import { DialogControl } from './DialogControl'
import PendingTipDialog from './components/PendingTipDialog'
import ResultTipDialog from './components/ResultTipDialog'
export const globalDialogControl = new DialogControl({
  PendingTipDialog,
  ResultTipDialog
})
