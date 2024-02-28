const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send(`LyogSGVhZGVyICovDQoNCi5za3R0IHsNCiAgICBkaXNwbGF5OiBmbGV4Ow0KICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7DQogICAgcGFkZGluZzogMCAycmVtOw0KICAgIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybzsNCiAgICBnYXA6IDFyZW07DQp9DQoNCi5za3R0IC50aXRsZSB7DQogICAgZm9udC1zaXplOiA0cmVtOw0KICAgIGZvbnQtd2VpZ2h0OiBib2xkOw0KfQ0KDQouc2t0dCAuc3VidGl0bGUgew0KICAgIGZvbnQtc2l6ZTogMnJlbTsNCiAgICBmb250LXdlaWdodDogYm9sZDsNCn0NCg0KLnNrdHQgLnNwYWNlciB7DQogICAgd2lkdGg6IC4yNXJlbTsNCiAgICBoZWlnaHQ6IDRyZW07DQogICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7DQp9DQoNCi5za3R0IGltZyB7DQogICAgd2lkdGg6IDVyZW07DQp9DQoNCi8qIFN0ZXAgdGl0bGVzICovDQoNCi5zdGVwVGl0bGVfc2tjIHsNCiAgICBtYXJnaW4tdG9wOiA0cmVtOw0KICAgIGJvcmRlcjogMnB4IHNvbGlkICMwOWE7DQogICAgYm9yZGVyLXJhZGl1czogMnJlbTsNCiAgICBmbGV4LWRpcmVjdGlvbjogcm93Ow0KICAgIG92ZXJmbG93OiBoaWRkZW47DQogICAgZGlzcGxheTogZmxleDsNCiAgICBmb250LXdlaWdodDogYm9sZDsNCiAgICBhbGlnbi1pdGVtczogY2VudGVyOw0KfQ0KDQouc3RlcFRpdGxlX3NrYzo6YmVmb3JlIHsNCiAgICB3aWR0aDogNXJlbTsNCiAgICBjb2xvcjogd2hpdGU7DQogICAgbWFyZ2luLXJpZ2h0OiAxcmVtOw0KICAgIHBhZGRpbmc6IC41cmVtIDFyZW07DQogICAgYmFja2dyb3VuZC1jb2xvcjogIzA5YTsNCn0NCg0KI3ZpZXdNb2RlbD5kaXYuc2tmYy5za2NuLnNrZmRjLnNrZmFzLnNrZm1kLnNrZmNuPmRpdi5za2ZseC5za2ZjLnNrZmRyLnNrZmFzLnNrY3A+ZGl2PmRpdj5kaXY6bnRoLWNoaWxkKDEpPmRpdi5za2Njb24uc2tmZHI+ZGl2LnNrZmZiLnNrZmx4LnN0ZXBUaXRsZV9za2ZmYj5sYWJlbDo6YmVmb3JlLA0KZGl2LnNrZmx4LnNrZmMuc2tmZHIuc2tmYXMuc2tjcD5kaXY+ZGl2PmRpdj5kaXYuc2tjdHIuc2tmZGMuc3RlcFRpdGxlX3NrY3RyPmRpdi5za2Njb24uc2tmZHI+ZGl2LnNrZmZiLnNrZmx4LnN0ZXBUaXRsZV9za2ZmYj5sYWJlbDo6YmVmb3JlIHsNCiAgICBjb250ZW50OiAiUEFTTyAxIjsNCiAgICBhbGlnbi1zZWxmOiBzdHJldGNoOw0KfQ0KDQojdmlld01vZGVsPmRpdi5za2ZjLnNrY24uc2tmZGMuc2tmYXMuc2tmbWQuc2tmY24+ZGl2LnNrZmx4LnNrZmMuc2tmZHIuc2tmYXMuc2tjcD5kaXY+ZGl2PmRpdjpudGgtY2hpbGQoMyk+ZGl2LnNrY2Nvbi5za2Zkcj5kaXYuc2tmZmIuc2tmbHguc3RlcFRpdGxlX3NrZmZiPmxhYmVsOjpiZWZvcmUsDQojdmlld01vZGVsPmRpdi5za2ZjLnNrY24uc2tmZGMuc2tmYXMuc2tmbWQuc2tmY24+ZGl2LnNrZmx4LnNrZmMuc2tmZHIuc2tmYXMuc2tjcD5kaXY+ZGl2PmRpdjpudGgtY2hpbGQoMyk+ZGl2LnNrY2Nvbi5za2Zkcj5kaXYuc2tmZmIuc2tmbHguc3RlcFRpdGxlX3NrZmZiPmxhYmVsIHsNCiAgICBjb250ZW50OiAiUEFTTyAyIjsNCiAgICBhbGlnbi1zZWxmOiBzdHJldGNoOw0KfQ0KDQojdmlld01vZGVsPmRpdi5za2ZjLnNrY24uc2tmZGMuc2tmYXMuc2tmbWQuc2tmY24+ZGl2LnNrZmx4LnNrZmMuc2tmZHIuc2tmYXMuc2tjcD5kaXY+ZGl2PmRpdjpudGgtY2hpbGQoNSk+ZGl2LnNrY2Nvbi5za2Zkcj5kaXYuc2tmZmIuc2tmbHguc3RlcFRpdGxlX3NrZmZiPmxhYmVsOjpiZWZvcmUgew0KICAgIGNvbnRlbnQ6ICJQQVNPIDMiOw0KICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7DQp9DQoNCiN2aWV3TW9kZWw+ZGl2LnNrZmMuc2tjbi5za2ZkYy5za2Zhcy5za2ZtZC5za2Zjbj5kaXYuc2tmbHguc2tmYy5za2Zkci5za2Zhcy5za2NwPmRpdj5kaXY+ZGl2Om50aC1jaGlsZCg3KT5kaXYuc2tjY29uLnNrZmRyPmRpdi5za2ZmYi5za2ZseC5zdGVwVGl0bGVfc2tmZmI+bGFiZWw6OmJlZm9yZSB7DQogICAgY29udGVudDogIlBBU08gNCI7DQogICAgYWxpZ24tc2VsZjogc3RyZXRjaDsNCn0NCg0KI3ZpZXdNb2RlbD5kaXYuc2tmYy5za2NuLnNrZmRjLnNrZmFzLnNrZm1kLnNrZmNuPmRpdi5za2ZseC5za2ZjLnNrZmRyLnNrZmFzLnNrY3A+ZGl2PmRpdj5kaXY6bnRoLWNoaWxkKDkpPmRpdi5za2Njb24uc2tmZHI+ZGl2LnNrZmZiLnNrZmx4LnN0ZXBUaXRsZV9za2ZmYj5sYWJlbDo6YmVmb3JlIHsNCiAgICBjb250ZW50OiAiUEFTTyA1IjsNCiAgICBhbGlnbi1zZWxmOiBzdHJldGNoOw0KfQ0KDQovKiBUZXh0IGlucHV0cyAqLw0KDQoNCi50ZXh0SW5wdXRTdHlsZTFfc2tjdHIgLnNrY2NvbiB7DQogICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7DQogICAgb3ZlcmZsb3c6IGhpZGRlbjsNCn0NCg0KLnRleHRJbnB1dFN0eWxlMV9za2ZsIHsNCiAgICB3aWR0aDogZml0LWNvbnRlbnQ7DQogICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYwLCA2MCwgNjApOw0KfQ0KDQoudGV4dElucHV0U3R5bGUxX3NrZmxpIHsNCiAgICBjb2xvcjogd2hpdGU7DQogICAgZm9udC13ZWlnaHQ6IGJvbGQ7DQp9DQoNCi50ZXh0SW5wdXRTdHlsZTFfc2tjIHsNCiAgICBib3JkZXI6IG5vbmU7DQogICAgb3V0bGluZTogbm9uZTsNCn0NCg0KLyogUGFuZWwgcGFzbyAxICovDQoNCi5wYW5lbFBhc28xX3NrY2IgLnNrcGN2IHsNCiAgICBkaXNwbGF5OiBncmlkOw0KICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7DQogICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMWZyKTsNCiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOg0KICAgICAgICAic3VwZXJ2aXNvciBzdXBlcnZpc29yIGVtcHJlc2EgZW1wcmVzYSINCiAgICAgICAgImdlcmVuY2lhIGZlY2hhIGhvcmFfaW5pY2lvIGhvcmFfdGVybWlubyINCiAgICAgICAgInN1cGVyaW50ZW5kZW5jaWEgc3VwZXJpbnRlbmRlbmNpYSBsdWdhciBsdWdhciINCiAgICAgICAgInRyYWJham8gdHJhYmFqbyB0cmFiYWpvIHRyYWJham8iOw0KfQ0KDQovKiBObyBFZGl0YWJsZSBCYXNlIEZvcm0gKi8NCg0KLm5vRWRpdGFibGVCYXNlRm9ybV9za2FyIHsNCiAgICBkaXNwbGF5OiBub25lOw0KfQ0KDQojdmlld01vZGVsPmRpdi5za2ZjLnNrY24uc2tmZGMuc2tmYXMuc2tmbWQuc2tmY24+ZGl2LnNrZmx4LnNrZmMuc2tmZHIuc2tmYXMuc2tjcD5kaXY+ZGl2PmRpdi5za2NuLnNrYXVpLnBhbmVsUGFzbzFfc2tjbj5kaXY6bnRoLWNoaWxkKDEpPmRpdi5za2N3LnBhbmVsUGFzbzFfc2tjdz5kaXY+ZGl2PmRpdjpudGgtY2hpbGQoMSksDQpkaXYuc2tmbHguc2tmYy5za2Zkci5za2Zhcy5za2NwPmRpdj5kaXY+ZGl2PmRpdjpudGgtY2hpbGQoMSkgew0KICAgIGdyaWQtYXJlYTogc3VwZXJ2aXNvcjsNCn0NCg0KI3ZpZXdNb2RlbD5kaXYuc2tmYy5za2NuLnNrZmRjLnNrZmFzLnNrZm1kLnNrZmNuPmRpdi5za2ZseC5za2ZjLnNrZmRyLnNrZmFzLnNrY3A+ZGl2PmRpdj5kaXYuc2tjbi5za2F1aS5wYW5lbFBhc28xX3NrY24+ZGl2Om50aC1jaGlsZCgxKT5kaXYuc2tjdy5wYW5lbFBhc28xX3NrY3c+ZGl2PmRpdj5kaXY6bnRoLWNoaWxkKDIpLA0KZGl2LnNrZmx4LnNrZmMuc2tmZHIuc2tmYXMuc2tjcD5kaXY+ZGl2PmRpdj5kaXY6bnRoLWNoaWxkKDIpIHsNCiAgICBncmlkLWFyZWE6IGVtcHJlc2E7DQp9DQoNCiN2aWV3TW9kZWw+ZGl2LnNrZmMuc2tjbi5za2ZkYy5za2Zhcy5za2ZtZC5za2Zjbj5kaXYuc2tmbHguc2tmYy5za2Zkci5za2Zhcy5za2NwPmRpdj5kaXY+ZGl2LnNrY24uc2thdWkucGFuZWxQYXNvMV9za2NuPmRpdjpudGgtY2hpbGQoMSk+ZGl2LnNrY3cucGFuZWxQYXNvMV9za2N3PmRpdj5kaXY+ZGl2Om50aC1jaGlsZCgzKSwNCmRpdi5za2ZseC5za2ZjLnNrZmRyLnNrZmFzLnNrY3A+ZGl2PmRpdj5kaXY+ZGl2Om50aC1jaGlsZCgzKSB7DQogICAgZ3JpZC1hcmVhOiBnZXJlbmNpYTsNCn0NCg0KI3ZpZXdNb2RlbD5kaXYuc2tmYy5za2NuLnNrZmRjLnNrZmFzLnNrZm1kLnNrZmNuPmRpdi5za2ZseC5za2ZjLnNrZmRyLnNrZmFzLnNrY3A+ZGl2PmRpdj5kaXYuc2tjbi5za2F1aS5wYW5lbFBhc28xX3NrY24+ZGl2Om50aC1jaGlsZCgxKT5kaXYuc2tjdy5wYW5lbFBhc28xX3NrY3c+ZGl2PmRpdj5kaXY6bnRoLWNoaWxkKDQpLA0KZGl2LnNrZmx4LnNrZmMuc2tmZHIuc2tmYXMuc2tjcD5kaXY+ZGl2PmRpdj5kaXY6bnRoLWNoaWxkKDQpIHsNCiAgICBncmlkLWFyZWE6IGZlY2hhOw0KfQ0KDQojdmlld01vZGVsPmRpdi5za2ZjLnNrY24uc2tmZGMuc2tmYXMuc2tmbWQuc2tmY24+ZGl2LnNrZmx4LnNrZmMuc2tmZHIuc2tmYXMuc2tjcD5kaXY+ZGl2PmRpdi5za2NuLnNrYXVpLnBhbmVsUGFzbzFfc2tjbj5kaXY6bnRoLWNoaWxkKDEpPmRpdi5za2N3LnBhbmVsUGFzbzFfc2tjdz5kaXY+ZGl2PmRpdjpudGgtY2hpbGQoNSksDQpkaXYuc2tmbHguc2tmYy5za2Zkci5za2Zhcy5za2NwPmRpdj5kaXY+ZGl2PmRpdjpudGgtY2hpbGQoNSkgew0KICAgIGdyaWQtYXJlYTogaG9yYV90ZXJtaW5vOw0KfQ0KDQojdmlld01vZGVsPmRpdi5za2ZjLnNrY24uc2tmZGMuc2tmYXMuc2tmbWQuc2tmY24+ZGl2LnNrZmx4LnNrZmMuc2tmZHIuc2tmYXMuc2tjcD5kaXY+ZGl2PmRpdi5za2NuLnNrYXVpLnBhbmVsUGFzbzFfc2tjbj5kaXY6bnRoLWNoaWxkKDEpPmRpdi5za2N3LnBhbmVsUGFzbzFfc2tjdz5kaXY+ZGl2PmRpdjpudGgtY2hpbGQoNiksDQpkaXYuc2tmbHguc2tmYy5za2Zkci5za2Zhcy5za2NwPmRpdj5kaXY+ZGl2PmRpdjpudGgtY2hpbGQoNikgew0KICAgIGdyaWQtYXJlYTogaG9yYV9pbmljaW87DQp9DQoNCiN2aWV3TW9kZWw+ZGl2LnNrZmMuc2tjbi5za2ZkYy5za2Zhcy5za2ZtZC5za2Zjbj5kaXYuc2tmbHguc2tmYy5za2Zkci5za2Zhcy5za2NwPmRpdj5kaXY+ZGl2LnNrY24uc2thdWkucGFuZWxQYXNvMV9za2NuPmRpdjpudGgtY2hpbGQoMSk+ZGl2LnNrY3cucGFuZWxQYXNvMV9za2N3PmRpdj5kaXY+ZGl2Om50aC1jaGlsZCg3KSwNCmRpdi5za2ZseC5za2ZjLnNrZmRyLnNrZmFzLnNrY3A+ZGl2PmRpdj5kaXY+ZGl2Om50aC1jaGlsZCg3KSB7DQogICAgZ3JpZC1hcmVhOiBzdXBlcmludGVuZGVuY2lhOw0KfQ0KDQojdmlld01vZGVsPmRpdi5za2ZjLnNrY24uc2tmZGMuc2tmYXMuc2tmbWQuc2tmY24+ZGl2LnNrZmx4LnNrZmMuc2tmZHIuc2tmYXMuc2tjcD5kaXY+ZGl2PmRpdi5za2NuLnNrYXVpLnBhbmVsUGFzbzFfc2tjbj5kaXY6bnRoLWNoaWxkKDEpPmRpdi5za2N3LnBhbmVsUGFzbzFfc2tjdz5kaXY+ZGl2PmRpdjpudGgtY2hpbGQoOCksDQpkaXYuc2tmbHguc2tmYy5za2Zkci5za2Zhcy5za2NwPmRpdj5kaXY+ZGl2PmRpdjpudGgtY2hpbGQoOCkgew0KICAgIGdyaWQtYXJlYTogbHVnYXI7DQp9DQoNCiN2aWV3TW9kZWw+ZGl2LnNrZmMuc2tjbi5za2ZkYy5za2Zhcy5za2ZtZC5za2Zjbj5kaXYuc2tmbHguc2tmYy5za2Zkci5za2Zhcy5za2NwPmRpdj5kaXY+ZGl2LnNrY24uc2thdWkucGFuZWxQYXNvMV9za2NuPmRpdjpudGgtY2hpbGQoMSk+ZGl2LnNrY3cucGFuZWxQYXNvMV9za2N3PmRpdj5kaXY+ZGl2Om50aC1jaGlsZCg5KSwNCmRpdi5za2ZseC5za2ZjLnNrZmRyLnNrZmFzLnNrY3A+ZGl2PmRpdj5kaXY+ZGl2Om50aC1jaGlsZCg5KSB7DQogICAgZ3JpZC1hcmVhOiB0cmFiYWpvOw0KfQ0KDQouc2twdCB7DQogICAgZGlzcGxheTogbm9uZTsNCn0NCg0KDQovKiBBdmlzb3MgZGUgY29sb3IgZGUgZm9uZG8gYXp1bCAqLw0KDQouYmx1ZUJhY2tncm91bmQxX3NrY3RyLA0KLmJsdWVCYWNrZ3JvdW5kMl9za2N0ciB7DQogICAgYmFja2dyb3VuZC1jb2xvcjogIzA5YTsNCn0NCg0KLmJsdWVCYWNrZ3JvdW5kMV9za2MsDQouYmx1ZUJhY2tncm91bmQyX3NrYyB7DQogICAgY29sb3I6IHdoaXRlOw0KICAgIHRleHQtYWxpZ246IGNlbnRlcjsNCn0NCg0KLmJsdWVCYWNrZ3JvdW5kMV9za2N0ciwNCi5ibHVlQmFja2dyb3VuZDFfc2tjdHIgKiB7DQogICAgcGFkZGluZy1ib3R0b206IDA7DQogICAgbWluLWhlaWdodDogMDsNCn0NCg0KLmJsdWVCYWNrZ3JvdW5kMl9za2N0ciwNCi5ibHVlQmFja2dyb3VuZDJfc2tjdHIgKiB7DQogICAgcGFkZGluZy10b3A6IDA7DQogICAgbWluLWhlaWdodDogMDsNCn0NCg0KI3ZpZXdNb2RlbD5kaXYuc2tmYy5za2NuLnNrZmRjLnNrZmFzLnNrZm1kLnNrZmNuPmRpdi5za2ZseC5za2ZjLnNrZmRyLnNrZmFzLnNrY3A+ZGl2PmRpdj5kaXY6bnRoLWNoaWxkKDQpPmRpdjpudGgtY2hpbGQoMSk+ZGl2LnNrY3c+ZGl2PmRpdj5kaXYuc2tjdHIuc2tmZGMuYmx1ZUJhY2tncm91bmQxX3NrY3RyPmRpdi5za2Njb24uc2tmZHI+ZGl2LnNrZmZiLnNrZmx4LmJsdWVCYWNrZ3JvdW5kMV9za2ZmYj5sYWJlbCB7DQogICAgZm9udC1zaXplOiAxLjVyZW07DQogICAgZm9udC13ZWlnaHQ6IGJvbGQ7DQp9DQoNCi8qIFBhc28gMiBwcmVndW50YXMgY29uIHJhZGlvcyAqLw0KDQojdmlld01vZGVsPmRpdi5za2ZjLnNrY24uc2tmZGMuc2tmYXMuc2tmbWQuc2tmY24+ZGl2LnNrZmx4LnNrZmMuc2tmZHIuc2tmYXMuc2tjcD5kaXY+ZGl2PmRpdjpudGgtY2hpbGQoNCk+ZGl2Om50aC1jaGlsZCgxKT5kaXYuc2tjdz5kaXY+ZGl2IHsNCiAgICBkaXNwbGF5OiBncmlkOw0KICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7DQogICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTsNCiAgICA7DQogICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczoNCiAgICAgICAgInF1ZXN0aW9uVGl0bGUxIHF1ZXN0aW9uVGl0bGUxIg0KICAgICAgICAicXVlc3Rpb25UaXRsZTIgcXVlc3Rpb25UaXRsZTIiDQogICAgICAgICJzdGVwMnN1cGVydmlzb3Igc3RlcDJ0cmFiYWphZG9yIg0KICAgICAgICAicXVlc3Rpb25UaXRsZTMgcXVlc3Rpb25UaXRsZTMiDQogICAgICAgICJxdWVzdGlvblRpdGxlNCBxdWVzdGlvblRpdGxlNCINCiAgICAgICAgInRhYmxlU3VwZXJ2aXNvciB0YWJsZVRyYWJhamFkb3IiDQogICAgICAgICJncmF5QmFja2dyb3VuZCBncmF5QmFja2dyb3VuZCINCiAgICA7DQp9DQoNCiN2aWV3TW9kZWw+ZGl2LnNrZmMuc2tjbi5za2ZkYy5za2Zhcy5za2ZtZC5za2Zjbj5kaXYuc2tmbHguc2tmYy5za2Zkci5za2Zhcy5za2NwPmRpdj5kaXY+ZGl2Om50aC1jaGlsZCg0KT5kaXY6bnRoLWNoaWxkKDEpPmRpdi5za2N3PmRpdj5kaXY+ZGl2LnNrY3RyLnNrZmRjLmJsdWVCYWNrZ3JvdW5kMV9za2N0ciB7DQogICAgZ3JpZC1hcmVhOiBxdWVzdGlvblRpdGxlMTsNCn0NCg0KI3ZpZXdNb2RlbD5kaXYuc2tmYy5za2NuLnNrZmRjLnNrZmFzLnNrZm1kLnNrZmNuPmRpdi5za2ZseC5za2ZjLnNrZmRyLnNrZmFzLnNrY3A+ZGl2PmRpdj5kaXY6bnRoLWNoaWxkKDQpPmRpdjpudGgtY2hpbGQoMSk+ZGl2LnNrY3c+ZGl2PmRpdj5kaXYuc2tjdHIuc2tmZGMuYmx1ZUJhY2tncm91bmQyX3NrY3RyIHsNCiAgICBncmlkLWFyZWE6IHF1ZXN0aW9uVGl0bGUyOw0KfQ0KDQojdmlld01vZGVsPmRpdi5za2ZjLnNrY24uc2tmZGMuc2tmYXMuc2tmbWQuc2tmY24+ZGl2LnNrZmx4LnNrZmMuc2tmZHIuc2tmYXMuc2tjcD5kaXY+ZGl2PmRpdjpudGgtY2hpbGQoNCk+ZGl2Om50aC1jaGlsZCgxKT5kaXYuc2tjdz5kaXY+ZGl2PmRpdjpudGgtY2hpbGQoNSkgew0KICAgIGdyaWQtYXJlYTogcXVlc3Rpb25UaXRsZTMgIWltcG9ydGFudDsNCn0NCg0KI3ZpZXdNb2RlbD5kaXYuc2tmYy5za2NuLnNrZmRjLnNrZmFzLnNrZm1kLnNrZmNuPmRpdi5za2ZseC5za2ZjLnNrZmRyLnNrZmFzLnNrY3A+ZGl2PmRpdj5kaXY6bnRoLWNoaWxkKDQpPmRpdjpudGgtY2hpbGQoMSk+ZGl2LnNrY3c+ZGl2PmRpdj5kaXY6bnRoLWNoaWxkKDYpIHsNCiAgICBncmlkLWFyZWE6IHF1ZXN0aW9uVGl0bGU0ICFpbXBvcnRhbnQ7DQp9DQoNCiN2aWV3TW9kZWw+ZGl2LnNrZmMuc2tjbi5za2ZkYy5za2Zhcy5za2ZtZC5za2Zjbj5kaXYuc2tmbHguc2tmYy5za2Zkci5za2Zhcy5za2NwPmRpdj5kaXY+ZGl2Om50aC1jaGlsZCg0KT5kaXY6bnRoLWNoaWxkKDEpPmRpdi5za2N3PmRpdj5kaXY+ZGl2Om50aC1jaGlsZCgzKSB7DQogICAgZ3JpZC1hcmVhOiBzdGVwMnN1cGVydmlzb3I7DQp9DQoNCiN2aWV3TW9kZWw+ZGl2LnNrZmMuc2tjbi5za2ZkYy5za2Zhcy5za2ZtZC5za2Zjbj5kaXYuc2tmbHguc2tmYy5za2Zkci5za2Zhcy5za2NwPmRpdj5kaXY+ZGl2Om50aC1jaGlsZCg0KT5kaXY6bnRoLWNoaWxkKDEpPmRpdi5za2N3PmRpdj5kaXY+ZGl2Om50aC1jaGlsZCg0KSB7DQogICAgZ3JpZC1hcmVhOiBzdGVwMnRyYWJhamFkb3I7DQp9DQoNCiN2aWV3TW9kZWw+ZGl2LnNrZmMuc2tjbi5za2ZkYy5za2Zhcy5za2ZtZC5za2Zjbj5kaXYuc2tmbHguc2tmYy5za2Zkci5za2Zhcy5za2NwPmRpdj5kaXY+ZGl2Om50aC1jaGlsZCg0KT5kaXY6bnRoLWNoaWxkKDEpPmRpdi5za2N3PmRpdj5kaXY+ZGl2Om50aC1jaGlsZCg4KSB7DQogICAgZ3JpZC1hcmVhOiB0YWJsZVRyYWJhamFkb3I7DQp9DQoNCiN2aWV3TW9kZWw+ZGl2LnNrZmMuc2tjbi5za2ZkYy5za2Zhcy5za2ZtZC5za2Zjbj5kaXYuc2tmbHguc2tmYy5za2Zkci5za2Zhcy5za2NwPmRpdj5kaXY+ZGl2Om50aC1jaGlsZCg0KT5kaXY6bnRoLWNoaWxkKDEpPmRpdi5za2N3PmRpdj5kaXY+ZGl2Om50aC1jaGlsZCg3KSB7DQogICAgZ3JpZC1hcmVhOiB0YWJsZVN1cGVydmlzb3I7DQp9DQoNCi5zdGVwMlF1ZXN0aW9uc1RpdGxlX3NrYyB7DQogICAgZm9udC13ZWlnaHQ6IGJvbGQ7DQogICAgY29sb3I6IHdoaXRlOw0KfQ0KDQojdmlld01vZGVsPmRpdi5za2ZjLnNrY24uc2tmZGMuc2tmYXMuc2tmbWQuc2tmY24+ZGl2LnNrZmx4LnNrZmMuc2tmZHIuc2tmYXMuc2tjcD5kaXY+ZGl2PmRpdjpudGgtY2hpbGQoNCk+ZGl2Om50aC1jaGlsZCgxKT5kaXYuc2tjdz5kaXY+ZGl2PmRpdjpudGgtY2hpbGQoMyk+ZGl2Om50aC1jaGlsZCgxKT5kaXYuc2tjdz5kaXY+ZGl2PmRpdi5za2N0ci5za2ZkYy5zdGVwMlF1ZXN0aW9uc1RpdGxlX3NrY3RyLA0KI3RlbXBsYXRlRGl2X1NDQURBQklfVEVTVElOR19SZXBvXzljMDkyOTAyX2Q4ZDNfNDRkYV9hNjk3XzJmMThmNzA4ZGVkM18xPmRpdi5za2ZseC5za2ZjLnNrZmRyLnNrZmFzLnNrY3A+ZGl2PmRpdj5kaXY+ZGl2LnNrY3RyLnNrZmRjLnN0ZXAyUXVlc3Rpb25zVGl0bGVfc2tjdHIsDQojdmlld01vZGVsPmRpdi5za2ZjLnNrY24uc2tmZGMuc2tmYXMuc2tmbWQuc2tmY24+ZGl2LnNrZmx4LnNrZmMuc2tmZHIuc2tmYXMuc2tjcD5kaXY+ZGl2PmRpdjpudGgtY2hpbGQoNCk+ZGl2Om50aC1jaGlsZCgxKT5kaXYuc2tjdz5kaXY+ZGl2PmRpdjpudGgtY2hpbGQoNyk+ZGl2Om50aC1jaGlsZCgxKT5kaXYuc2tjdz5kaXY+ZGl2PmRpdi5za2N0ci5za2ZkYy5zdGVwMlF1ZXN0aW9uc1RpdGxlX3NrY3RyIHsNCiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA2MDYwOw0KfQ0KDQojdmlld01vZGVsPmRpdi5za2ZjLnNrY24uc2tmZGMuc2tmYXMuc2tmbWQuc2tmY24+ZGl2LnNrZmx4LnNrZmMuc2tmZHIuc2tmYXMuc2tjcD5kaXY+ZGl2PmRpdjpudGgtY2hpbGQoNCk+ZGl2Om50aC1jaGlsZCgxKT5kaXYuc2tjdz5kaXY+ZGl2PmRpdjpudGgtY2hpbGQoNCk+ZGl2Om50aC1jaGlsZCgxKT5kaXYuc2tjdz5kaXY+ZGl2PmRpdi5za2N0ci5za2ZkYy5zdGVwMlF1ZXN0aW9uc1RpdGxlX3NrY3RyLA0KI3ZpZXdNb2RlbD5kaXYuc2tmYy5za2NuLnNrZmRjLnNrZmFzLnNrZm1kLnNrZmNuPmRpdi5za2ZseC5za2ZjLnNrZmRyLnNrZmFzLnNrY3A+ZGl2PmRpdj5kaXY6bnRoLWNoaWxkKDQpPmRpdjpudGgtY2hpbGQoMSk+ZGl2LnNrY3c+ZGl2PmRpdj5kaXY6bnRoLWNoaWxkKDgpPmRpdjpudGgtY2hpbGQoMSk+ZGl2LnNrY3c+ZGl2PmRpdj5kaXYuc2tjdHIuc2tmZGMuc3RlcDJRdWVzdGlvbnNUaXRsZV9za2N0ciB7DQogICAgYmFja2dyb3VuZC1jb2xvcjogIzRkNmE5NDsNCn0NCg0KLnBhc28ySW5wdXRfc2tmbCB7DQogICAgd2lkdGg6IDcwJSAhaW1wb3J0YW50Ow0KfQ0KDQoucGFzbzJJbnB1dF9za2ZmYiB7DQogICAgd2lkdGg6IDMwJSAhaW1wb3J0YW50Ow0KfQ0KDQouc2tidCB7DQogICAgZGlzcGxheTogbm9uZTsNCn0NCg0KLyogZ3JheSBiYWNrZ3JvdW5kIGxhYmVsKi8NCg0KLmdyYXlCYWNrZ3JvdW5kX3NrY3RyIHsNCiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTY1NjU2Ow0KICAgIGZvbnQtc2l6ZTogMS41cmVtOw0KICAgIGdyaWQtYXJlYTogZ3JheUJhY2tncm91bmQ7DQp9DQoNCi5ncmF5QmFja2dyb3VuZF9za2N0ciBsYWJlbCB7DQogICAgZm9udC1zaXplOiAxLjVyZW07DQogICAgdGV4dC1hbGlnbjogY2VudGVyOw0KICAgIGZvbnQtd2VpZ2h0OiBib2xkOw0KICAgIGNvbG9yOiB3aGl0ZTsNCn0NCg0KLyogYmFzZSBmb3JtICovDQoNCi5jb2RlbGNvQmFzZUZvcm1fc2tjdyB7DQogICAgZGlzcGxheTogZmxleDsNCiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOw0KICAgIGdhcDogMnJlbTsNCn0NCg0KLyogYWxlcnQgdGV4dCAqLw0KDQouYWxlcnRUZXh0X3NrYyB7DQogICAgY29sb3I6ICNlZjc0NWM7DQogICAgZm9udC13ZWlnaHQ6IGJvbGQ7DQogICAgdGV4dC1hbGlnbjogY2VudGVyOw0KICAgIGZvbnQtc2l6ZTogMS41cmVtOw0KfQ0KDQouc2tndnRoIHsNCiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87DQp9DQoNCi8qKiogUGhvbmUvVGFibGV0IHN0eWxlcyAqKiovDQpAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkgew0KICAgIC5wYW5lbFBhc28xX3NrY2IgLnNrcGN2IHsNCiAgICAgICAgZGlzcGxheTogYmxvY2s7DQogICAgfQ0KDQogICAgLmNvZGVsY29CYXNlRm9ybV9za2NiIHsNCiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTsNCiAgICB9DQoNCiAgICBkaXYuc2tmbHguc2tmYy5za2Zkci5za2Zhcy5za2NwPmRpdj5kaXY+ZGl2PmRpdjpudGgtY2hpbGQoMik+ZGl2LnNrY2Z3LnNrZmRjLnNrbXZ0PmRpdi5za2J0IHsNCiAgICAgICAgZGlzcGxheTogYmxvY2s7DQogICAgfQ0KDQogICAgLyptdWVzdHJhIHRpdHVsb3MgZGUgcGFuZWxlcyovDQogICAgLnNrcHQgew0KICAgICAgICBkaXNwbGF5OiBibG9jazsNCiAgICB9DQoNCiAgICAvKiBtdWVzdHJhIGJvdG9uIGRlbGV0ZSBlbiBtb2JpbGUqLw0KICAgIC5jb2RlbGNvQmFzZUZvcm1fc2tkciB7DQogICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDsNCiAgICB9DQoNCiAgICAvKiBlc2NvbmRlIHRpdHVsbyBwYXNvIDEgKi8NCiAgICBkaXYuc2tmbHguc2tmYy5za2Zkci5za2Zhcy5za2NwPmRpdj5kaXY+ZGl2PmRpdi5za2N0ci5za2ZkYy5zdGVwVGl0bGVfc2tjdHI+ZGl2LnNrY2Nvbi5za2Zkcj5kaXYuc2tmZmIuc2tmbHguc3RlcFRpdGxlX3NrZmZiPmxhYmVsIHsNCiAgICAgICAgZGlzcGxheTogbm9uZTsNCiAgICB9DQp9DQoNCi8qIDEwMjRweCAqLw0KQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHsNCiAgICAuc2t0dCAudGl0bGUgew0KICAgICAgICBmb250LXNpemU6IDIuNXJlbTsNCiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7DQogICAgfQ0KDQogICAgLnNrdHQgLnN1YnRpdGxlIHsNCiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtOw0KICAgICAgICBmb250LXdlaWdodDogYm9sZDsNCiAgICB9DQoNCiAgICAuc2t0dCAuc3BhY2VyIHsNCiAgICAgICAgd2lkdGg6IC4yNXJlbTsNCiAgICAgICAgaGVpZ2h0OiA0cmVtOw0KICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsNCiAgICB9DQoNCiAgICAuc2t0dCBpbWcgew0KICAgICAgICB3aWR0aDogNXJlbTsNCiAgICB9DQp9`);
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});