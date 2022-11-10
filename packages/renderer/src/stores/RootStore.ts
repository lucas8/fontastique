import { BaseStore } from './BaseStore';
import { FontStore } from './FontStore';
import { FontWeightStore } from './FontWeightStore';
import { UiStore } from './UiStore';

// we'll use the term snapshot to define a plain object representation of the store
// this will either come from the local database, or be loaded from the server
// TODO: more strictly define what this schema will look like
export type TSnapshotItem = { __typename: string; [key: string]: any };
export type TSnapshot = Array<TSnapshotItem>;

export class RootStore {
  fonts: FontStore;
  fontWeights: FontWeightStore;
  ui: UiStore;

  constructor(snapshot: TSnapshot) {
    this.fonts = new FontStore(this);
    this.ui = new UiStore(this);
    this.fontWeights = new FontWeightStore(this);

    this._hydrate(snapshot);
  }

  public _hydrate(snapshot: TSnapshot) {
    // batch entities with the same type together
    const snapshotGroups = snapshot.reduce((acc, item) => {
      return { ...acc, [item.__typename]: [...(acc[item.__typename] || []), item] };
    }, {} as Record<string, TSnapshotItem[]>);

    Object.keys(snapshotGroups).map(entityType => {
      // all items in this group will inherit the properties from BaseStore
      const store: BaseStore<any> = Object.values(this).find(store => store.model?.__typename === entityType);

      if (!store) {
        console.warn("[RootStore] couldn't find a store for item of type ", entityType);
        return [];
      }

      store.hydrate(snapshotGroups[entityType]);
    });
  }
}

export const createRootStore = (snapshot: TSnapshot): RootStore => {
  return new RootStore(snapshot);
};
