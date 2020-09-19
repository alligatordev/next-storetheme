export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {
    Node: [
      'Coupon',
      'ContentType',
      'Taxonomy',
      'User',
      'Comment',
      'EnqueuedScript',
      'EnqueuedStylesheet',
      'MediaItem',
      'Page',
      'Post',
      'Category',
      'PostFormat',
      'Tag',
      'UserRole',
      'ProductCategory',
      'PaColor',
      'ProductVariation',
      'VariableProduct',
      'PaMaterial',
      'PaPaperWeight',
      'PaSize',
      'ProductTag',
      'ProductType',
      'ShippingClass',
      'VisibleProduct',
      'Customer',
      'Order',
      'TaxRate',
      'Refund',
      'ShippingMethod',
      'ExternalProduct',
      'GroupProduct',
      'Menu',
      'MenuItem',
      'Plugin',
      'SimpleProduct',
      'Theme',
      'CommentAuthor',
    ],
    UniformResourceIdentifiable: [
      'ContentType',
      'User',
      'MediaItem',
      'Page',
      'Post',
      'Category',
      'PostFormat',
      'Tag',
      'ProductCategory',
      'PaColor',
      'PaMaterial',
      'PaPaperWeight',
      'PaSize',
      'ProductTag',
      'ProductType',
      'ShippingClass',
      'VisibleProduct',
    ],
    ContentNode: ['MediaItem', 'Page', 'Post'],
    Commenter: ['User', 'CommentAuthor'],
    DatabaseIdentifier: [
      'User',
      'Comment',
      'MediaItem',
      'Page',
      'Post',
      'Category',
      'PostFormat',
      'Tag',
      'ProductCategory',
      'PaColor',
      'PaMaterial',
      'PaPaperWeight',
      'PaSize',
      'ProductTag',
      'ProductType',
      'ShippingClass',
      'VisibleProduct',
      'Menu',
      'MenuItem',
    ],
    EnqueuedAsset: ['EnqueuedScript', 'EnqueuedStylesheet'],
    NodeWithTitle: ['MediaItem', 'Page', 'Post'],
    NodeWithAuthor: ['MediaItem', 'Page', 'Post'],
    NodeWithComments: ['MediaItem', 'Page', 'Post'],
    HierarchicalContentNode: ['MediaItem', 'Page'],
    TermNode: [
      'Category',
      'PostFormat',
      'Tag',
      'ProductCategory',
      'PaColor',
      'PaMaterial',
      'PaPaperWeight',
      'PaSize',
      'ProductTag',
      'ProductType',
      'ShippingClass',
      'VisibleProduct',
    ],
    NodeWithContentEditor: ['Page', 'Post'],
    NodeWithFeaturedImage: ['Page', 'Post'],
    NodeWithRevisions: ['Page', 'Post'],
    NodeWithPageAttributes: ['Page'],
    MenuItemLinkable: ['Page', 'Post', 'Category', 'Tag', 'ProductCategory', 'ProductTag'],
    NodeWithExcerpt: ['Post'],
    NodeWithTrackbacks: ['Post'],
    HierarchicalTermNode: ['Category', 'ProductCategory'],
    ContentRevisionUnion: ['Post', 'Page'],
    Product: ['VariableProduct', 'ExternalProduct', 'GroupProduct', 'SimpleProduct'],
    ProductAttribute: ['GlobalProductAttribute', 'LocalProductAttribute'],
    MenuItemObjectUnion: ['Post', 'Page', 'Category', 'Tag', 'ProductCategory', 'ProductTag'],
    PostObjectUnion: ['Post', 'Page', 'MediaItem'],
    TermObjectUnion: [
      'Category',
      'Tag',
      'PostFormat',
      'ProductType',
      'VisibleProduct',
      'ProductCategory',
      'ProductTag',
      'ShippingClass',
      'PaColor',
      'PaMaterial',
      'PaPaperWeight',
      'PaSize',
    ],
    ContentTemplate: [],
  },
};
export default result;