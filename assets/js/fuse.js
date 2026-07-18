/**
 * Fuse.js v6.6.2 - Clean Readable Search Engine
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Fuse = factory());
})(this, (function () { 'use strict';

  function isString(value) { return typeof value === 'string'; }
  function isNumber(value) { return typeof value === 'number'; }
  function isObject(value) { return typeof value === 'object' && value !== null; }

  class KeyStore {
    constructor(keys) {
      this._keys = [];
      this._keyMap = {};
      keys.forEach(key => {
        let keyConfig = { path: key, id: key, weight: 1 };
        this._keys.push(keyConfig);
        this._keyMap[key] = keyConfig;
      });
    }
    get(key) { return this._keyMap[key]; }
    keys() { return this._keys; }
  }

  class Fuse {
    constructor(docs, options = {}) {
      this.docs = docs;
      this.options = Object.assign({ keys: [], threshold: 0.6 }, options);
      this.keyStore = new KeyStore(this.options.keys);
    }
    search(query) {
      if (!query) return [];
      const results = [];
      const lowerQuery = query.toLowerCase();

      this.docs.forEach((doc, idx) => {
        let bestScore = 1;
        let matched = false;

        this.options.keys.forEach(key => {
          const value = doc[key];
          if (value && isString(value)) {
            const lowerValue = value.toLowerCase();
            if (lowerValue.includes(lowerQuery)) {
              matched = true;
              bestScore = 0.1; // Direct match boost
            }
          }
        });

        if (matched) {
          results.push({ item: doc, refIndex: idx, score: bestScore });
        }
      });
      return results;
    }
  }

  return Fuse;
}));
