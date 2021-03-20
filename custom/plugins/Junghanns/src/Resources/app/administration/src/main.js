import './module/sw-cms/blocks/text-image/image-brands';
import './module/sw-cms/blocks/text-image/image-text-row';
import './module/sw-cms/blocks/text-image/image-text-row-two';

import './module/sw-cms/blocks/commerce/product-four-column';

import './module/sw-cms/blocks/text/text-four-column';

import deDE from './module/sw-cms/snippet/de-DE.json';
import enGB from './module/sw-cms/snippet/en-GB.json';

Shopware.Locale.extend('de-DE', deDE);
Shopware.Locale.extend('en-GB', enGB);
