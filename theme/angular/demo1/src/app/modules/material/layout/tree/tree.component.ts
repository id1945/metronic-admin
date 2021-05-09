// tslint:disable:variable-name semicolon
import {
  CollectionViewer,
  SelectionChange,
  SelectionModel,
} from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import {
  Component,
  Injectable,
  ChangeDetectionStrategy,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { BehaviorSubject, merge, Observable, of as observableOf } from 'rxjs';
import { map } from 'rxjs/operators';

const treeWithDynamicData = {
  beforeCodeTitle: 'Tree with dynamic data',
  htmlCode: `
<mat-tree [dataSource]="dataSource" [treeControl]="treeControl">
  <mat-tree-node *matTreeNodeDef="let node" matTreeNodePadding>
    <button mat-icon-button disabled></button>
    {{node.item}}
  </mat-tree-node>
  <mat-tree-node *matTreeNodeDef="let node; when: hasChild" matTreeNodePadding>
    <button mat-icon-button
      [attr.aria-label]="'toggle ' + node.filename" matTreeNodeToggle>
      <mat-icon class="mat-icon-rtl-mirror">
        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}
      </mat-icon>
    </button>
    {{node.item}}
    <mat-progress-bar *ngIf="node.isLoading"
      mode="indeterminate"
      class="example-tree-progress-bar"></mat-progress-bar>
  </mat-tree-node>
</mat-tree>`,
  tsCode: `
import {CollectionViewer, SelectionChange} from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, Injectable} from '@angular/core';
import {BehaviorSubject, merge, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

/** Flat node with expandable and level information */
export class DynamicFlatNode {
  constructor(public item: string, public level = 1, public expandable = false,
    public isLoading = false) {}
  }\n
  /**
  * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
  * the descendants data from the database.
  */
  export class DynamicDatabase {
    dataMap = new Map<string, string[]>([
      ['Vegetables', ['Tomato', 'Potato', 'Onion']],
      ['Apple', ['Fuji', 'Macintosh']],
      ['Onion', ['Yellow', 'White', 'Purple']]
    ]);

    rootLevelNodes: string[] = ['Fruits', 'Vegetables'];
    /** Initial data from database */
    initialData(): DynamicFlatNode[] {
    return this.rootLevelNodes.map(name => new DynamicFlatNode(name, 0, true));
  }

  getChildren(node: string): string[] | undefined {
    return this.dataMap.get(node);
  }

  isExpandable(node: string): boolean {
    return this.dataMap.has(node);
  }
}\n
/**
* File database, it can build a tree structured Json object from string.
* Each node in Json object represents a file or a directory. For a file, it has filename and type.
* For a directory, it has filename and children (a list of files or directories).
* The input will be a json object string, and the output is a list of \`FileNode\` with nested
* structure.
*/
@Injectable()
export class DynamicDataSource {

  dataChange = new BehaviorSubject<DynamicFlatNode[]>([]);

  get data(): DynamicFlatNode[] { return this.dataChange.value; }
  set data(value: DynamicFlatNode[]) {
    this.treeControl.dataNodes = value;
    this.dataChange.next(value);
  }

  constructor(private treeControl: FlatTreeControl<DynamicFlatNode>,
    private database: DynamicDatabase) {}

  connect(collectionViewer: CollectionViewer): Observable<DynamicFlatNode[]> {
    this.treeControl.expansionModel.onChange!.subscribe(change => {
    if ((change as SelectionChange<DynamicFlatNode>).added ||
      (change as SelectionChange<DynamicFlatNode>).removed) {
        this.handleTreeControl(change as SelectionChange<DynamicFlatNode>);
      }
    });

    return merge(collectionViewer.viewChange, this.dataChange).pipe(map(() => this.data));
  }\n

  /** Handle expand/collapse behaviors */
  handleTreeControl(change: SelectionChange<DynamicFlatNode>) {
    if (change.added) {
      change.added.forEach(node => this.toggleNode(node, true));
    }
    if (change.removed) {
      change.removed.slice().reverse().forEach(node => this.toggleNode(node, false));
    }
  }\n

  /**
  * Toggle the node, remove from display list
  */
  toggleNode(node: DynamicFlatNode, expand: boolean) {
    const children = this.database.getChildren(node.item);
    const index = this.data.indexOf(node);
    if (!children || index < 0) { // If no children, or cannot find the node, no op
      return;
    }\n

    node.isLoading = true;

    setTimeout(() => {
      if (expand) {
        const nodes = children.map(name =>
          new DynamicFlatNode(name, node.level + 1, this.database.isExpandable(name)));
          this.data.splice(index + 1, 0, ...nodes);
      } else {
        let count = 0;
        for (let i = index + 1; i < this.data.length
          && this.data[i].level > node.level; i++, count++) {}
          this.data.splice(index + 1, count);
        }\n

        // notify the change
        this.dataChange.next(this.data);
        node.isLoading = false;
    }, 1000);
  }
}\n

/**
* @title Tree with dynamic data
*/
@Component({
  selector: 'tree-dynamic-example',
  templateUrl: 'tree-dynamic-example.html',
  styleUrls: ['tree-dynamic-example.css'],
  providers: [DynamicDatabase]
})
export class TreeDynamicExample {
  constructor(database: DynamicDatabase) {
    this.treeControl = new FlatTreeControl<DynamicFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new DynamicDataSource(this.treeControl, database);

    this.dataSource.data = database.initialData();
  }

  treeControl: FlatTreeControl<DynamicFlatNode>;

  dataSource: DynamicDataSource;

  getLevel = (node: DynamicFlatNode) => node.level;

  isExpandable = (node: DynamicFlatNode) => node.expandable;

  hasChild = (_: number, _nodeData: DynamicFlatNode) => _nodeData.expandable;
}
`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const treeWithFlatNodes = {
  beforeCodeTitle: 'Tree with flat nodes',
  htmlCode: `
<mat-tree [dataSource]="dataSource" [treeControl]="treeControl">
  <mat-tree-node *matTreeNodeDef="let node" matTreeNodeToggle matTreeNodePadding>
    <button mat-icon-button disabled></button>
    {{node.filename}} : {{node.type}}
  </mat-tree-node>

  <mat-tree-node *matTreeNodeDef="let node;when: hasChild" matTreeNodePadding>
    <button mat-icon-button matTreeNodeToggle
      [attr.aria-label]="'toggle ' + node.filename">
      <mat-icon class="mat-icon-rtl-mirror">
        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}
      </mat-icon>
    </button>
    {{node.filename}} : {{node.type}}
  </mat-tree-node>
</mat-tree>`,
  tsCode: `
import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, Injectable} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {BehaviorSubject, Observable, of as observableOf} from 'rxjs';

/**
* File node data with nested structure.
* Each node has a filename, and a type or a list of children.
*/
export class FileNode {
  children: FileNode[];
  filename: string;
  type: any;
}

/** Flat node with expandable and level information */
  export class FileFlatNode {
  constructor(
  public expandable: boolean, public filename: string, public level: number, public type: any) {}\n
}

/**
* The file structure tree data in string. The data could be parsed into a Json object
*/
const TREE_DATA = JSON.stringify({
  Applications: {
    Calendar: 'app',
    Chrome: 'app',
    Webstorm: 'app'
  },
  Documents: {
    angular: {
      src: {
        compiler: 'ts',
        core: 'ts'
      }
    },
    material2: {
      src: {
        button: 'ts',
        checkbox: 'ts',
        input: 'ts'
      }
    }
  },
  Downloads: {
    October: 'pdf',
    November: 'pdf',
    Tutorial: 'html'
  },
  Pictures: {
    'Photo Booth Library': {
      Contents: 'dir',
      Pictures: 'dir'
    },
    Sun: 'png',
    Woods: 'jpg'
   }
});

/**
* File database, it can build a tree structured Json object from string.
* Each node in Json object represents a file or a directory. For a file, it has filename and type.
* For a directory, it has filename and children (a list of files or directories).
* The input will be a json object string, and the output is a list of \`FileNode\` with nested
* structure.
*/
@Injectable()
  export class FileDatabase {
  dataChange = new BehaviorSubject<FileNode[]>([]);

  get data(): FileNode[] { return this.dataChange.value; }

  constructor() {
    this.initialize();
  }

  initialize() {
    // Parse the string to json object.
    const dataObject = JSON.parse(TREE_DATA);

    // Build the tree nodes from Json object. The result is a list of \`FileNode\` with nested
    //     file node as children.
    const data = this.buildFileTree(dataObject, 0);

    // Notify the change.
    this.dataChange.next(data);
  }

  /**
  * Build the file structure tree. The \`value\` is the Json object, or a sub-tree of a Json object.
  * The return value is the list of \`FileNode\`.
  */
  buildFileTree(obj: object, level: number): FileNode[] {
    return Object.keys(obj).reduce<FileNode[]>((accumulator, key) => {
    const value = obj[key];
    const node = new FileNode();
    node.filename = key;

     if (value != null) {
       if (typeof value === 'object') {
         node.children = this.buildFileTree(value, level + 1);
       } else {
         node.type = value;
       }
      }

      return accumulator.concat(node);
    }, []);
  }
}\n

/**
* @title Tree with flat nodes
*/
@Component({
  selector: 'tree-flat-overview-example',
  templateUrl: 'tree-flat-overview-example.html',
  styleUrls: ['tree-flat-overview-example.css'],
  providers: [FileDatabase]
})
export class TreeFlatOverviewExample {
  treeControl: FlatTreeControl<FileFlatNode>;
  treeFlattener: MatTreeFlattener<FileNode, FileFlatNode>;
  dataSource: MatTreeFlatDataSource<FileNode, FileFlatNode>;

  constructor(database: FileDatabase) {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel,
    this._isExpandable, this._getChildren);
    this.treeControl = new FlatTreeControl<FileFlatNode>(this._getLevel, this._isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    database.dataChange.subscribe(data => this.dataSource.data = data);
  }

  transformer = (node: FileNode, level: number) => {
    return new FileFlatNode(!!node.children, node.filename, level, node.type);
  }

  private _getLevel = (node: FileFlatNode) => node.level;
  private _isExpandable = (node: FileFlatNode) => node.expandable;
  private _getChildren = (node: FileNode): Observable<FileNode[]> => observableOf(node.children);
  hasChild = (_: number, _nodeData: FileFlatNode) => _nodeData.expandable;
}
`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const treeWithCheckboxes = {
  beforeCodeTitle: 'Tree with checkboxes',
  htmlCode: `
<mat-tree [dataSource]="dataSource" [treeControl]="treeControl">
  <mat-tree-node *matTreeNodeDef="let node" matTreeNodeToggle matTreeNodePadding>
    <button mat-icon-button disabled></button>
    <mat-checkbox class="checklist-leaf-node"
      [checked]="checklistSelection.isSelected(node)"
      (change)="checklistSelection.toggle(node);">{{node.item}}</mat-checkbox>
  </mat-tree-node>

  <mat-tree-node *matTreeNodeDef="let node; when: hasNoContent" matTreeNodePadding>
     <button mat-icon-button disabled></button>
     <mat-form-field>
       <input matInput #itemValue placeholder="New item...">
     </mat-form-field>
     <button mat-button (click)="saveNode(node, itemValue.value)">Save</button>
  </mat-tree-node>

  <mat-tree-node *matTreeNodeDef="let node; when: hasChild" matTreeNodePadding>
    <button mat-icon-button matTreeNodeToggle
      [attr.aria-label]="'toggle ' + node.filename">
      <mat-icon class="mat-icon-rtl-mirror">
        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}
      </mat-icon>
    </button>
    <mat-checkbox [checked]="descendantsAllSelected(node)"
      [indeterminate]="descendantsPartiallySelected(node)"
      (change)="todoItemSelectionToggle(node)">{{node.item}}</mat-checkbox>
    <button mat-icon-button (click)="addNewItem(node)"><mat-icon>add</mat-icon></button>
  </mat-tree-node>
</mat-tree>`,
  tsCode: `
import {SelectionModel} from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, Injectable} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {BehaviorSubject} from 'rxjs';\n
/**
* Node for to-do item
*/
export class TodoItemNode {
  children: TodoItemNode[];
  item: string;
}

/** Flat to-do item node with expandable and level information */
export class TodoItemFlatNode {
  item: string;
  level: number;
  expandable: boolean;
}

/**
* The Json object for to-do list data.
*/
const TREE_DATA = {
  Groceries: {
    'Almond Meal flour': null,
    'Organic eggs': null,
    'Protein Powder': null,
    Fruits: {
      Apple: null,
      Berries: ['Blueberry', 'Raspberry'],
      Orange: null
    }
  },
  Reminders: [
    'Cook dinner',
    'Read the Material Design spec',
    'Upgrade Application to Angular'
  ]
};

/**
* Checklist database, it can build a tree structured Json object.
* Each node in Json object represents a to-do item or a category.
* If a node is a category, it has children items and new items can be added under the category.
*/
@Injectable()
export class ChecklistDatabase {
  dataChange = new BehaviorSubject<TodoItemNode[]>([]);

  get data(): TodoItemNode[] { return this.dataChange.value; }

  constructor() {
    this.initialize();
  }

  initialize() {
    // Build the tree nodes from Json object. The result is a list of \`TodoItemNode\` with nested
    //     file node as children.
    const data = this.buildFileTree(TREE_DATA, 0);

    // Notify the change.
    this.dataChange.next(data);
  }

  /**
  * Build the file structure tree. The \`value\` is the Json object, or a sub-tree of a Json object.
  * The return value is the list of \`TodoItemNode\`.
  */
  buildFileTree(obj: object, level: number): TodoItemNode[] {
    return Object.keys(obj).reduce<TodoItemNode[]>((accumulator, key) => {
      const value = obj[key];
      const node = new TodoItemNode();
      node.item = key;

      if (value != null) {
        if (typeof value === 'object') {
          node.children = this.buildFileTree(value, level + 1);
        } else {
          node.item = value;
        }
      }

      return accumulator.concat(node);
    }, []);
  }

/** Add an item to to-do list */
  insertItem(parent: TodoItemNode, name: string) {
    if (parent.children) {
      parent.children.push({item: name} as TodoItemNode);
      this.dataChange.next(this.data);
    }
  }

  updateItem(node: TodoItemNode, name: string) {
    node.item = name;
	this.dataChange.next(this.data);
  }
}

/**
* @title Tree with checkboxes
*/
@Component({
  selector: 'tree-checklist-example',
  templateUrl: 'tree-checklist-example.html',
  styleUrls: ['tree-checklist-example.css'],
  providers: [ChecklistDatabase]
)
export class TreeChecklistExample {
  /** Map from flat node to nested node. This helps us finding the nested node to be modified */
  flatNodeMap = new Map<TodoItemFlatNode, TodoItemNode>();

  /** Map from nested node to flattened node. This helps us to keep the same object for selection */
  nestedNodeMap = new Map<TodoItemNode, TodoItemFlatNode>();

  /** A selected parent node to be inserted */
  selectedParent: TodoItemFlatNode | null = null;

  /** The new item's name */
  newItemName = '';

  treeControl: FlatTreeControl<TodoItemFlatNode>;

  treeFlattener: MatTreeFlattener<TodoItemNode, TodoItemFlatNode>;

  dataSource: MatTreeFlatDataSource<TodoItemNode, TodoItemFlatNode>;

  /** The selection for checklist */
  checklistSelection = new SelectionModel<TodoItemFlatNode>(true /* multiple */);

  constructor(private database: ChecklistDatabase) {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel,
    this.isExpandable, this.getChildren);
    this.treeControl = new FlatTreeControl<TodoItemFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    database.dataChange.subscribe(data => {
      this.dataSource.data = data;
    });
  }

  getLevel = (node: TodoItemFlatNode) => node.level;

  isExpandable = (node: TodoItemFlatNode) => node.expandable;

  getChildren = (node: TodoItemNode): TodoItemNode[] => node.children;

  hasChild = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.expandable;

  hasNoContent = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.item === '';

  /**
  * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
  */
  transformer = (node: TodoItemNode, level: number) => {
    const existingNode = this.nestedNodeMap.get(node);
    const flatNode = existingNode && existingNode.item === node.item
      ? existingNode
      : new TodoItemFlatNode();
    flatNode.item = node.item;
    flatNode.level = level;
    flatNode.expandable = !!node.children;
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    return flatNode;
  }

  /** Whether all the descendants of the node are selected */
  descendantsAllSelected(node: TodoItemFlatNode): boolean {
  const descendants = this.treeControl.getDescendants(node);
     return descendants.every(child => this.checklistSelection.isSelected(child));
  }

  /** Whether part of the descendants are selected */
  descendantsPartiallySelected(node: TodoItemFlatNode): boolean {
  const descendants = this.treeControl.getDescendants(node);
  const result = descendants.some(child => this.checklistSelection.isSelected(child));
    return result && !this.descendantsAllSelected(node);
  }

  /** Toggle the to-do item selection. Select/deselect all the descendants node */
  todoItemSelectionToggle(node: TodoItemFlatNode): void {
    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checklistSelection.isSelected(node) ? this.checklistSelection.select(...descendants)
      : this.checklistSelection.deselect(...descendants);
  }

  /** Select the category so we can insert the new item. */
  addNewItem(node: TodoItemFlatNode) {
    const parentNode = this.flatNodeMap.get(node);
    this.database.insertItem(parentNode!, '');
    this.treeControl.expand(node);
  }

  /** Save the node to database */
  saveNode(node: TodoItemFlatNode, itemValue: string) {
    const nestedNode = this.flatNodeMap.get(node);
    this.database.updateItem(nestedNode!, itemValue);
  }
}
`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const treeWithPartiallyLoadedData = {
  beforeCodeTitle: 'Tree with partially loaded data',
  htmlCode: `
<mat-tree [dataSource]="dataSource" [treeControl]="treeControl">
  <!-- Leaf node -->
  <mat-tree-node *matTreeNodeDef="let node" matTreeNodePadding>
    <button mat-icon-button disabled></button>
      {{node.item}}
  </mat-tree-node>

  <!-- expandable node -->
  <mat-tree-node *matTreeNodeDef="let node; when: hasChild" matTreeNodePadding>
    <button mat-icon-button
      [attr.aria-label]="'toggle ' + node.filename"
      (click)="loadChildren(node)"
      matTreeNodeToggle>
      <mat-icon class="mat-icon-rtl-mirror">
        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}
      </mat-icon>
   </button>
   {{node.item}}
  </mat-tree-node>

  <mat-tree-node *matTreeNodeDef="let node; when: isLoadMore">
    <button mat-button (click)="loadMore(node.loadMoreParentItem)">
      Load more...
    </button>
  </mat-tree-node>
</mat-tree>`,
  tsCode: `
/**
* @license
* Copyright Google LLC All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://angular.io/license
*/
import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, Injectable} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {BehaviorSubject, Observable} from 'rxjs';

const LOAD_MORE = 'LOAD_MORE';
/** Nested node */
export class LoadmoreNode {
  childrenChange = new BehaviorSubject<LoadmoreNode[]>([]);

  get children(): LoadmoreNode[] {
    return this.childrenChange.value;
  }

  constructor(public item: string,
  public hasChildren = false,
  public loadMoreParentItem: string | null = null) {}
}

/** Flat node with expandable and level information */
export class LoadmoreFlatNode {
  constructor(public item: string,
  public level = 1,
  public expandable = false,
  public loadMoreParentItem: string | null = null) {}
}

/**
* A database that only load part of the data initially. After user clicks on the \`Load more\`
* button, more data will be loaded.
*/
@Injectable()
export class LoadmoreDatabase {
  batchNumber = 5;
  dataChange = new BehaviorSubject<LoadmoreNode[]>([]);
  nodeMap = new Map<string, LoadmoreNode>();

  /** The data */
  rootLevelNodes: string[] = ['Vegetables', 'Fruits'];
  dataMap = new Map<string, string[]>([
    ['Fruits', ['Apple', 'Orange', 'Banana']],
    ['Vegetables', ['Tomato', 'Potato', 'Onion']],
    ['Apple', ['Fuji', 'Macintosh']],
    ['Onion', ['Yellow', 'White', 'Purple', 'Green', 'Shallot', 'Sweet', 'Red', 'Leek']],
  ]);

  initialize() {
    const data = this.rootLevelNodes.map(name => this._generateNode(name));
    this.dataChange.next(data);
  }

  /** Expand a node whose children are not loaded */
  loadMore(item: string, onlyFirstTime = false) {
    if (!this.nodeMap.has(item) || !this.dataMap.has(item)) {
      return;
    }
    const parent = this.nodeMap.get(item)!;
    const children = this.dataMap.get(item)!;
    if (onlyFirstTime && parent.children!.length > 0) {
      return;
    }
    const newChildrenNumber = parent.children!.length + this.batchNumber;
    const nodes = children.slice(0, newChildrenNumber).map(name => this._generateNode(name));
    if (newChildrenNumber < children.length) {
    // Need a new load more node
      nodes.push(new LoadmoreNode(LOAD_MORE, false, item));
    }

    parent.childrenChange.next(nodes);
    this.dataChange.next(this.dataChange.value);
  }

  private _generateNode(item: string): LoadmoreNode {
    if (this.nodeMap.has(item)) {
      return this.nodeMap.get(item)!;
    }
    const result = new LoadmoreNode(item, this.dataMap.has(item));
    this.nodeMap.set(item, result);
    return result;
  }
}

/**
* @title Tree with partially loaded data
*/
Component({
  selector: 'tree-loadmore-example',
  templateUrl: 'tree-loadmore-example.html',
  styleUrls: ['tree-loadmore-example.css'],
  providers: [LoadmoreDatabase]
})
export class TreeLoadmoreExample {
  nodeMap = new Map<string, LoadmoreFlatNode>();
  treeControl: FlatTreeControl<LoadmoreFlatNode>;
  treeFlattener: MatTreeFlattener<LoadmoreNode, LoadmoreFlatNode>;
  // Flat tree data source
  dataSource: MatTreeFlatDataSource<LoadmoreNode, LoadmoreFlatNode>;

  constructor(private database: LoadmoreDatabase) {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel,
    this.isExpandable, this.getChildren);

    this.treeControl = new FlatTreeControl<LoadmoreFlatNode>(this.getLevel, this.isExpandable);

    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    database.dataChange.subscribe(data => {
      this.dataSource.data = data;
    });

    database.initialize();
  }

  getChildren = (node: LoadmoreNode): Observable<LoadmoreNode[]> => node.childrenChange;

  transformer = (node: LoadmoreNode, level: number) => {
    const existingNode = this.nodeMap.get(node.item);

    if (existingNode) {
      return existingNode;
    }

    const newNode = new LoadmoreFlatNode(node.item, level, node.hasChildren, node.loadMoreParentItem);
    this.nodeMap.set(node.item, newNode);
    return newNode;
  }

  getLevel = (node: LoadmoreFlatNode) => node.level;

  isExpandable = (node: LoadmoreFlatNode) => node.expandable;

  hasChild = (_: number, _nodeData: LoadmoreFlatNode) => _nodeData.expandable;

  isLoadMore = (_: number, _nodeData: LoadmoreFlatNode) => _nodeData.item === LOAD_MORE;

  /** Load more nodes from data source */
  loadMore(item: string) {
    this.database.loadMore(item);
  }

  loadChildren(node: LoadmoreFlatNode) {
    this.database.loadMore(node.item, true);
  }
}`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

/**
 * File node data with nested structure.
 * Each node has a filename, and a type or a list of children.
 */
export class FileNode {
  children: FileNode[];
  filename: string;
  type: any;
}

/** Flat node with expandable and level information */
export class FileFlatNode {
  constructor(
    public expandable: boolean,
    public filename: string,
    public level: number,
    public type: any
  ) {}
}

/**
 * The file structure tree data in string. The data could be parsed into a Json object
 */
const TREE_DATA = JSON.stringify({
  Applications: {
    Calendar: 'app',
    Chrome: 'app',
    Webstorm: 'app',
  },
  Documents: {
    angular: {
      src: {
        compiler: 'ts',
        core: 'ts',
      },
    },
    material2: {
      src: {
        button: 'ts',
        checkbox: 'ts',
        input: 'ts',
      },
    },
  },
  Downloads: {
    October: 'pdf',
    November: 'pdf',
    Tutorial: 'html',
  },
  Pictures: {
    'Photo Booth Library': {
      Contents: 'dir',
      Pictures: 'dir',
    },
    Sun: 'png',
    Woods: 'jpg',
  },
});

/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
@Injectable()
export class FileDatabase {
  dataChange = new BehaviorSubject<FileNode[]>([]);

  get data(): FileNode[] {
    if (this.dataChange) {
      return this.dataChange.value;
    }

    return undefined;
  }

  constructor() {
    this.initialize();
  }

  initialize() {
    // Parse the string to json object.
    const dataObject = JSON.parse(TREE_DATA);

    // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
    //     file node as children.
    const data = this.buildFileTree(dataObject, 0);

    // Notify the change.
    this.dataChange.next(data);
  }

  /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `FileNode`.
   */
  buildFileTree(obj: object, level: number): FileNode[] {
    return Object.keys(obj).reduce<FileNode[]>((accumulator, key) => {
      const value = obj[key];
      const node = new FileNode();
      node.filename = key;

      if (value != null) {
        if (typeof value === 'object') {
          node.children = this.buildFileTree(value, level + 1);
        } else {
          node.type = value;
        }
      }

      return accumulator.concat(node);
    }, []);
  }
}

/** Flat node with expandable and level information */
export class DynamicFlatNode {
  constructor(
    public item: string,
    public level = 1,
    public expandable = false,
    public isLoading = false
  ) {}
}

/**
 * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
 * the descendants data from the database.
 */
export class DynamicDatabase {
  dataMap = new Map<string, string[]>([
    ['Fruits', ['Apple', 'Orange', 'Banana']],
    ['Vegetables', ['Tomato', 'Potato', 'Onion']],
    ['Apple', ['Fuji', 'Macintosh']],
    ['Onion', ['Yellow', 'White', 'Purple']],
  ]);

  rootLevelNodes: string[] = ['Fruits', 'Vegetables'];

  /** Initial data from database */
  initialData(): DynamicFlatNode[] {
    return this.rootLevelNodes.map(
      (name) => new DynamicFlatNode(name, 0, true)
    );
  }

  getChildren(node: string): string[] | undefined {
    return this.dataMap.get(node);
  }

  isExpandable(node: string): boolean {
    return this.dataMap.has(node);
  }
}

/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
@Injectable()
export class DynamicDataSource {
  dataChange = new BehaviorSubject<DynamicFlatNode[]>([]);

  get data(): DynamicFlatNode[] {
    return this.dataChange.value;
  }
  set data(value: DynamicFlatNode[]) {
    this.treeControl.dataNodes = value;
    this.dataChange.next(value);
  }

  constructor(
    private treeControl: FlatTreeControl<DynamicFlatNode>,
    private database: DynamicDatabase,
    private cdr: ChangeDetectorRef
  ) {}

  connect(collectionViewer: CollectionViewer): Observable<DynamicFlatNode[]> {
    // tslint:disable-next-line:no-non-null-assertion
    this.treeControl.expansionModel.changed!.subscribe((change) => {
      if (
        (change as SelectionChange<DynamicFlatNode>).added ||
        (change as SelectionChange<DynamicFlatNode>).removed
      ) {
        this.handleTreeControl(change as SelectionChange<DynamicFlatNode>);
      }
    });

    return merge(collectionViewer.viewChange, this.dataChange).pipe(
      map(() => this.data)
    );
  }

  /** Handle expand/collapse behaviors */
  handleTreeControl(change: SelectionChange<DynamicFlatNode>) {
    if (change.added) {
      change.added.forEach((node) => this.toggleNode(node, true));
    }
    if (change.removed) {
      change.removed
        .slice()
        .reverse()
        .forEach((node) => this.toggleNode(node, false));
    }
  }

  /**
   * Toggle the node, remove from display list
   */
  toggleNode(node: DynamicFlatNode, expand: boolean) {
    const children = this.database.getChildren(node.item);
    const index = this.data.indexOf(node);
    if (!children || index < 0) {
      // If no children, or cannot find the node, no op
      return;
    }

    node.isLoading = true;

    setTimeout(() => {
      if (expand) {
        const nodes = children.map(
          (name) =>
            new DynamicFlatNode(
              name,
              node.level + 1,
              this.database.isExpandable(name)
            )
        );
        this.data.splice(index + 1, 0, ...nodes);
      } else {
        let count = 0;
        for (
          let i = index + 1;
          i < this.data.length && this.data[i].level > node.level;
          i++, count++
        ) {}
        this.data.splice(index + 1, count);
      }

      // notify the change
      this.dataChange.next(this.data);
      node.isLoading = false;
      this.cdr.markForCheck();
    }, 500);
  }
}

/**
 * Node for to-do item
 */
export class TodoItemNode {
  children: TodoItemNode[];
  item: string;
}

/** Flat to-do item node with expandable and level information */
export class TodoItemFlatNode {
  item: string;
  level: number;
  expandable: boolean;
}

/**
 * The Json object for to-do list data.
 */
const TREE_DATA_3 = {
  Groceries: {
    'Almond Meal flour': null,
    'Organic eggs': null,
    'Protein Powder': null,
    Fruits: {
      Apple: null,
      Berries: ['Blueberry', 'Raspberry'],
      Orange: null,
    },
  },
  Reminders: [
    'Cook dinner',
    'Read the Material Design spec',
    'Upgrade Application to Angular',
  ],
};

/**
 * Checklist database, it can build a tree structured Json object.
 * Each node in Json object represents a to-do item or a category.
 * If a node is a category, it has children items and new items can be added under the category.
 */
@Injectable()
export class ChecklistDatabase {
  dataChange = new BehaviorSubject<TodoItemNode[]>([]);

  get data(): TodoItemNode[] {
    if (this.dataChange) {
      return this.dataChange.value;
    }

    return undefined;
  }

  constructor() {
    this.initialize();
  }

  initialize() {
    // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
    //     file node as children.
    const data = this.buildFileTree(TREE_DATA_3, 0);

    // Notify the change.
    this.dataChange.next(data);
  }

  /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `TodoItemNode`.
   */
  buildFileTree(obj: object, level: number): TodoItemNode[] {
    return Object.keys(obj).reduce<TodoItemNode[]>((accumulator, key) => {
      const value = obj[key];
      const node = new TodoItemNode();
      node.item = key;

      if (value != null) {
        if (typeof value === 'object') {
          node.children = this.buildFileTree(value, level + 1);
        } else {
          node.item = value;
        }
      }

      return accumulator.concat(node);
    }, []);
  }

  /** Add an item to to-do list */
  insertItem(parent: TodoItemNode, name: string) {
    if (parent.children) {
      parent.children.push({ item: name } as TodoItemNode);
      this.dataChange.next(this.data);
    }
  }

  updateItem(node: TodoItemNode, name: string) {
    node.item = name;
    this.dataChange.next(this.data);
  }
}

const LOAD_MORE = 'LOAD_MORE';
/** Nested node */
export class LoadmoreNode {
  childrenChange = new BehaviorSubject<LoadmoreNode[]>([]);

  get children(): LoadmoreNode[] {
    return this.childrenChange.value;
  }

  constructor(
    public item: string,
    public hasChildren = false,
    public loadMoreParentItem: string | null = null
  ) {}
}

/** Flat node with expandable and level information */
export class LoadmoreFlatNode {
  constructor(
    public item: string,
    public level = 1,
    public expandable = false,
    public loadMoreParentItem: string | null = null
  ) {}
}

/**
 * A database that only load part of the data initially. After user clicks on the `Load more`
 * button, more data will be loaded.
 */
@Injectable()
export class LoadmoreDatabase {
  batchNumber = 5;
  dataChange = new BehaviorSubject<LoadmoreNode[]>([]);
  nodeMap = new Map<string, LoadmoreNode>();

  /** The data */
  rootLevelNodes: string[] = ['Vegetables', 'Fruits'];
  dataMap = new Map<string, string[]>([
    ['Fruits', ['Apple', 'Orange', 'Banana']],
    ['Vegetables', ['Tomato', 'Potato', 'Onion']],
    ['Apple', ['Fuji', 'Macintosh']],
    [
      'Onion',
      ['Yellow', 'White', 'Purple', 'Green', 'Shallot', 'Sweet', 'Red', 'Leek'],
    ],
  ]);

  initialize() {
    const data = this.rootLevelNodes.map((name) => this._generateNode(name));
    this.dataChange.next(data);
  }

  /** Expand a node whose children are not loaded */
  loadMore(item: string, onlyFirstTime = false) {
    if (!this.nodeMap.has(item) || !this.dataMap.has(item)) {
      return;
    }
    // tslint:disable-next-line:no-non-null-assertion
    const parent = this.nodeMap.get(item)!;
    // tslint:disable-next-line:no-non-null-assertion
    const children = this.dataMap.get(item)!;
    // tslint:disable-next-line:no-non-null-assertion
    if (onlyFirstTime && parent.children!.length > 0) {
      return;
    }
    // tslint:disable-next-line:no-non-null-assertion
    const newChildrenNumber = parent.children!.length + this.batchNumber;
    const nodes = children
      .slice(0, newChildrenNumber)
      .map((name) => this._generateNode(name));
    if (newChildrenNumber < children.length) {
      // Need a new load more node
      nodes.push(new LoadmoreNode(LOAD_MORE, false, item));
    }

    parent.childrenChange.next(nodes);
    this.dataChange.next(this.dataChange.value);
  }

  private _generateNode(item: string): LoadmoreNode {
    if (this.nodeMap.has(item)) {
      // tslint:disable-next-line:no-non-null-assertion
      return this.nodeMap.get(item)!;
    }
    const result = new LoadmoreNode(item, this.dataMap.has(item));
    this.nodeMap.set(item, result);
    return result;
  }
}

/**
 * @title Tree with dynamic data
 */
@Component({
  selector: 'app-material-tree',
  templateUrl: './tree.component.html',
  styles: [
    `
      .example-tree-progress-bar {
        margin-left: 30px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [
    DynamicDatabase,
    FileDatabase,
    ChecklistDatabase,
    LoadmoreDatabase,
  ],
})
export class TreeComponent implements OnInit {
  exampleTreeWithDynamicData;
  exampleTreeWithFlatNodes;
  exampleTreeWithCheckboxes;
  exampleTreeWithPartiallyLoadedData;

  treeControl: FlatTreeControl<DynamicFlatNode>;
  dataSource: DynamicDataSource;

  treeControl2: FlatTreeControl<FileFlatNode>;
  treeFlattener2: MatTreeFlattener<FileNode, FileFlatNode>;
  dataSource2: MatTreeFlatDataSource<FileNode, FileFlatNode>;

  /** Map from flat node to nested node. This helps us finding the nested node to be modified */
  flatNodeMap3 = new Map<TodoItemFlatNode, TodoItemNode>();
  /** Map from nested node to flattened node. This helps us to keep the same object for selection */
  nestedNodeMap3 = new Map<TodoItemNode, TodoItemFlatNode>();
  /** A selected parent node to be inserted */
  selectedParent3: TodoItemFlatNode | null = null;
  /** The new item's name */
  newItemName3 = '';
  treeControl3: FlatTreeControl<TodoItemFlatNode>;
  treeFlattener3: MatTreeFlattener<TodoItemNode, TodoItemFlatNode>;
  dataSource3: MatTreeFlatDataSource<TodoItemNode, TodoItemFlatNode>;
  /** The selection for checklist */
  checklistSelection3 = new SelectionModel<TodoItemFlatNode>(
    true /* multiple */
  );

  nodeMap4 = new Map<string, LoadmoreFlatNode>();
  treeControl4: FlatTreeControl<LoadmoreFlatNode>;
  treeFlattener4: MatTreeFlattener<LoadmoreNode, LoadmoreFlatNode>;
  // Flat tree data source
  dataSource4: MatTreeFlatDataSource<LoadmoreNode, LoadmoreFlatNode>;

  constructor(
    database: DynamicDatabase,
    database2: FileDatabase,
    private database3: ChecklistDatabase,
    private database4: LoadmoreDatabase,
    private cdr: ChangeDetectorRef
  ) {
    this.treeControl = new FlatTreeControl<DynamicFlatNode>(
      this.getLevel,
      this.isExpandable
    );
    this.dataSource = new DynamicDataSource(
      this.treeControl,
      database,
      this.cdr
    );
    this.dataSource.data = database.initialData();

    this.treeFlattener2 = new MatTreeFlattener(
      this.transformer2,
      this._getLevel2,
      this._isExpandable2,
      this._getChildren2
    );
    this.treeControl2 = new FlatTreeControl<FileFlatNode>(
      this._getLevel2,
      this._isExpandable2
    );
    this.dataSource2 = new MatTreeFlatDataSource(
      this.treeControl2,
      this.treeFlattener2
    );
    database2.dataChange.subscribe((data) => (this.dataSource2.data = data));

    this.treeFlattener3 = new MatTreeFlattener(
      this.transformer3,
      this.getLevel3,
      this.isExpandable3,
      this.getChildren3
    );
    this.treeControl3 = new FlatTreeControl<TodoItemFlatNode>(
      this.getLevel3,
      this.isExpandable3
    );
    this.dataSource3 = new MatTreeFlatDataSource(
      this.treeControl3,
      this.treeFlattener3
    );
    database3.dataChange.subscribe((data) => {
      this.dataSource3.data = data;
    });

    this.treeFlattener4 = new MatTreeFlattener(
      this.transformer4,
      this.getLevel4,
      this.isExpandable4,
      this.getChildren4
    );
    this.treeControl4 = new FlatTreeControl<LoadmoreFlatNode>(
      this.getLevel4,
      this.isExpandable4
    );
    this.dataSource4 = new MatTreeFlatDataSource(
      this.treeControl4,
      this.treeFlattener4
    );
    database4.dataChange.subscribe((data) => {
      this.dataSource4.data = data;
    });
    database4.initialize();
  }

  ngOnInit() {
    this.exampleTreeWithDynamicData = treeWithDynamicData;
    this.exampleTreeWithFlatNodes = treeWithFlatNodes;
    this.exampleTreeWithCheckboxes = treeWithCheckboxes;
    this.exampleTreeWithPartiallyLoadedData = treeWithPartiallyLoadedData;
  }

  getLevel = (node: DynamicFlatNode) => node.level;
  isExpandable = (node: DynamicFlatNode) => node.expandable;
  // tslint:disable-next-line:variable-name
  hasChild = (_: number, _nodeData: DynamicFlatNode) => _nodeData.expandable;

  transformer2 = (node: FileNode, level: number) => {
    return new FileFlatNode(!!node.children, node.filename, level, node.type);
  };
  // tslint:disable-next-line:variable-name
  private _getLevel2 = (node: FileFlatNode) => node.level;
  // tslint:disable-next-line:variable-name
  private _isExpandable2 = (node: FileFlatNode) => node.expandable;
  // tslint:disable-next-line:variable-name
  private _getChildren2 = (node: FileNode): Observable<FileNode[]> =>
    // tslint:disable-next-line:semicolon
    observableOf(node.children);
  hasChild2 = (_: number, _nodeData: FileFlatNode) => _nodeData.expandable;

  getLevel3 = (node: TodoItemFlatNode) => node.level;
  isExpandable3 = (node: TodoItemFlatNode) => node.expandable;
  getChildren3 = (node: TodoItemNode): TodoItemNode[] => node.children;
  hasChild3 = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.expandable;
  hasNoContent3 = (_: number, _nodeData: TodoItemFlatNode) =>
    _nodeData.item === '';

  /**
   * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
   */
  transformer3 = (node: TodoItemNode, level: number) => {
    const existingNode = this.nestedNodeMap3.get(node);
    const flatNode =
      existingNode && existingNode.item === node.item
        ? existingNode
        : new TodoItemFlatNode();
    flatNode.item = node.item;
    flatNode.level = level;
    flatNode.expandable = !!node.children;
    this.flatNodeMap3.set(flatNode, node);
    this.nestedNodeMap3.set(node, flatNode);
    return flatNode;
  };

  /** Whether all the descendants of the node are selected */
  descendantsAllSelected3(node: TodoItemFlatNode): boolean {
    const descendants = this.treeControl3.getDescendants(node);
    return descendants.every((child) =>
      this.checklistSelection3.isSelected(child)
    );
  }

  /** Whether part of the descendants are selected */
  descendantsPartiallySelected3(node: TodoItemFlatNode): boolean {
    const descendants = this.treeControl3.getDescendants(node);
    const result = descendants.some((child) =>
      this.checklistSelection3.isSelected(child)
    );
    return result && !this.descendantsAllSelected3(node);
  }

  /** Toggle the to-do item selection. Select/deselect all the descendants node */
  todoItemSelectionToggle3(node: TodoItemFlatNode): void {
    this.checklistSelection3.toggle(node);
    const descendants = this.treeControl3.getDescendants(node);
    this.checklistSelection3.isSelected(node)
      ? this.checklistSelection3.select(...descendants)
      : this.checklistSelection3.deselect(...descendants);
  }

  /** Select the category so we can insert the new item. */
  addNewItem3(node: TodoItemFlatNode) {
    const parentNode = this.flatNodeMap3.get(node);
    // tslint:disable-next-line:no-non-null-assertion
    this.database3.insertItem(parentNode!, '');
    this.treeControl3.expand(node);
  }

  /** Save the node to database */
  saveNode3(node: TodoItemFlatNode, itemValue: string) {
    const nestedNode = this.flatNodeMap3.get(node);
    // tslint:disable-next-line:no-non-null-assertion
    this.database3.updateItem(nestedNode!, itemValue);
  }

  getChildren4 = (node: LoadmoreNode): Observable<LoadmoreNode[]> =>
    node.childrenChange;

  transformer4 = (node: LoadmoreNode, level: number) => {
    const existingNode = this.nodeMap4.get(node.item);

    if (existingNode) {
      return existingNode;
    }

    const newNode = new LoadmoreFlatNode(
      node.item,
      level,
      node.hasChildren,
      node.loadMoreParentItem
    );
    this.nodeMap4.set(node.item, newNode);
    return newNode;
  };

  getLevel4 = (node: LoadmoreFlatNode) => node.level;
  isExpandable4 = (node: LoadmoreFlatNode) => node.expandable;
  hasChild4 = (_: number, _nodeData: LoadmoreFlatNode) => _nodeData.expandable;
  isLoadMore4 = (_: number, _nodeData: LoadmoreFlatNode) =>
    _nodeData.item === LOAD_MORE;

  /** Load more nodes from data source */
  loadMore4(item: string) {
    this.database4.loadMore(item);
  }

  loadChildren4(node: LoadmoreFlatNode) {
    this.database4.loadMore(node.item, true);
  }
}
