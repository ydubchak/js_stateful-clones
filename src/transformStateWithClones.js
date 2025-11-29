'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const result = [];
  let current = { ...state };

  for (const a of actions) {
    if (a.type === 'clear') {
      current = {};
    }

    if (a.type === 'addProperties') {
      current = { ...current, ...a.extraData };
    }

    if (a.type === 'removeProperties') {
      current = { ...current };

      for (const k of a.keysToRemove) {
        delete current[k];
      }
    }

    result.push({ ...current });
  }

  return result;
}

module.exports = transformStateWithClones;
