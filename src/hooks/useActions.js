import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";

/**
 * bind dispatch action hooks
 *
 * @param actions: Array
 * @param deps: Array
 * @returns {unknown} Array of dispatchFn or single dispatch Fn
 */
export default function useActions (actions, deps) {
  const dispatch = useDispatch();
  return useMemo(
    () => {
    if (Array.isArray(actions)) {
      return actions.map(action => bindActionCreators(action, dispatch))
    } else {
      return bindActionCreators(actions, dispatch);
    }
  }, [...deps, dispatch]);
}
