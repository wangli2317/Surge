/*
脚本功能：彩云天气 会员
下载地址：appstore
软件版本：所有
脚本作者：伟人
作者QQ:55749353
更新时间：2022-11-29
问题反馈：QQ+55749353
QQ会员群：暂无
TG反馈群：https://t.me/WeiRenQAQ
TG频道群：暂无
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

[rewrite_local]

^http[s]?:\/\/biz\.(caiyunapp|cyapi)\.(com|cn)\/v2\/user.*$ url script-response-body https://raw.githubusercontent.com/WeiRen0/Scripts/main/cytq.js

[mitm]
hostname = *.caiyunapp.*,*cyapi*

*/
;
var encode_version = 'jsjiami.com.v5',
    aesvf = '__0xf0aaf',
    __0xf0aaf = ['\x62\x46\x64\x42\x59\x32\x55\x3d', '\x51\x33\x4e\x34\x59\x30\x63\x3d', '\x55\x33\x5a\x48\x61\x33\x59\x3d', '\x52\x6c\x4a\x42\x62\x6b\x6b\x3d', '\x63\x6c\x4a\x74\x53\x6b\x73\x3d', '\x54\x6b\x4a\x59\x57\x6c\x49\x3d', '\x63\x55\x64\x36\x62\x6d\x45\x3d', '\x56\x57\x56\x6f\x52\x57\x59\x3d', '\x57\x47\x39\x57\x53\x48\x41\x3d', '\x53\x48\x4e\x70\x57\x6d\x6b\x3d', '\x65\x45\x56\x71\x63\x6e\x59\x3d', '\x63\x55\x78\x48\x59\x30\x59\x3d', '\x64\x33\x56\x61\x62\x46\x45\x3d', '\x54\x57\x70\x79\x64\x57\x34\x3d', '\x64\x31\x5a\x43\x65\x58\x6f\x3d', '\x55\x46\x70\x54\x51\x55\x6f\x3d', '\x65\x58\x4a\x58\x64\x57\x49\x3d', '\x55\x6e\x64\x4a\x57\x6d\x63\x3d', '\x65\x57\x31\x59\x62\x6b\x55\x3d', '\x61\x6d\x4a\x6a\x63\x6b\x67\x3d', '\x63\x30\x74\x30\x53\x58\x4d\x3d', '\x59\x6d\x39\x6b\x65\x51\x3d\x3d', '\x63\x47\x46\x79\x63\x32\x55\x3d', '\x64\x32\x56\x70\x65\x47\x6c\x75', '\x4d\x54\x67\x32\x4f\x44\x67\x34\x4f\x44\x67\x34\x4f\x44\x67\x3d', '\x4d\x7a\x67\x79\x52\x44\x55\x78\x4e\x44\x67\x74\x4d\x6a\x67\x77\x4d\x53\x30\x30\x4f\x54\x6c\x46\x4c\x54\x6b\x34\x51\x6a\x63\x74\x4f\x44\x63\x34\x51\x54\x55\x78\x51\x6a\x63\x78\x51\x54\x4a\x42', '\x4e\x57\x59\x31\x59\x6d\x5a\x6a\x4e\x54\x64\x6b\x4d\x6d\x4d\x32\x4f\x44\x6b\x77\x4d\x44\x45\x30\x5a\x54\x49\x32\x59\x6d\x49\x34', '\x62\x7a\x4e\x79\x53\x6c\x39\x30\x4d\x44\x42\x79\x4d\x47\x31\x34\x63\x56\x4d\x32\x52\x30\x4e\x57\x56\x30\x31\x68\x56\x6e\x52\x46\x52\x6b\x78\x56\x61\x77\x3d\x3d', '\x5a\x58\x6c\x4b\x61\x47\x4a\x48\x59\x32\x6c\x50\x61\x55\x70\x4a\x56\x58\x70\x4a\x4d\x55\x35\x70\x53\x58\x4e\x4a\x62\x6c\x49\x31\x59\x30\x4e\x4a\x4e\x6b\x6c\x72\x63\x46\x68\x57\x51\x30\x6f\x35\x4c\x6d\x56\x35\x53\x6a\x4a\x61\x57\x45\x70\x36\x59\x56\x63\x35\x64\x55\x6c\x71\x62\x33\x68\x4d\x51\x30\x6f\x78\x59\x7a\x4a\x57\x65\x56\x67\x79\x62\x47\x74\x4a\x61\x6d\x39\x70\x54\x6c\x64\x5a\x4d\x56\x6c\x74\x57\x6d\x70\x4f\x56\x47\x52\x72\x54\x57\x31\x4e\x4d\x6b\x39\x45\x61\x33\x64\x4e\x52\x45\x55\x77\x57\x6c\x52\x4a\x4d\x6c\x6c\x74\x53\x54\x52\x4a\x61\x58\x64\x70\x59\x7a\x4e\x61\x63\x47\x4e\x47\x4f\x57\x78\x6c\x53\x45\x4a\x77\x59\x32\x31\x57\x61\x31\x67\x79\x52\x6a\x42\x4a\x61\x6d\x39\x34\x54\x6d\x70\x6a\x4d\x45\x31\x71\x53\x54\x4e\x4e\x56\x46\x6b\x79\x54\x47\x70\x52\x65\x45\x35\x71\x59\x7a\x4e\x4e\x55\x33\x64\x70\x5a\x47\x31\x73\x64\x31\x67\x79\x56\x6a\x52\x6a\x52\x32\x78\x35\x57\x6c\x64\x53\x5a\x6c\x6c\x59\x55\x57\x6c\x50\x61\x6b\x49\x35\x4c\x6e\x64\x69\x5a\x32\x5a\x44\x55\x6e\x41\x7a\x56\x7a\x6c\x36\x52\x58\x5a\x36\x52\x56\x6c\x7a\x61\x56\x64\x34\x5a\x58\x4a\x30\x59\x54\x52\x48\x4c\x57\x51\x74\x59\x6a\x42\x78\x62\x46\x6c\x44\x59\x32\x6c\x73\x5a\x58\x5a\x50\x53\x31\x6b\x3d', '\x61\x48\x52\x30\x63\x48\x4d\x36\x4c\x79\x39\x30\x61\x47\x6c\x79\x5a\x48\x46\x78\x4c\x6e\x46\x73\x62\x32\x64\x76\x4c\x6d\x4e\x75\x4c\x32\x63\x2f\x59\x6a\x31\x76\x61\x57\x52\x69\x4a\x6d\x73\x39\x64\x32\x52\x4d\x4d\x48\x4a\x59\x57\x56\x4a\x74\x59\x32\x4a\x44\x64\x7a\x64\x68\x56\x33\x46\x71\x61\x6a\x46\x4f\x51\x53\x5a\x7a\x50\x54\x45\x77\x4d\x43\x5a\x30\x50\x54\x45\x31\x4e\x54\x49\x77\x4e\x54\x45\x79\x4f\x54\x55\x3d', '\x63\x57\x64\x72\x64\x57\x67\x3d', '\x63\x33\x52\x79\x61\x57\x35\x6e\x61\x57\x5a\x35', '\x4d\x33\x77\x79\x66\x44\x56\x38\x4e\x33\x77\x77\x66\x44\x52\x38\x4d\x58\x77\x32', '\x64\x57\x35\x6b\x5a\x57\x5a\x70\x62\x6d\x56\x6b', '\x62\x32\x4a\x71\x5a\x57\x4e\x30', '\x5a\x6e\x56\x75\x59\x33\x52\x70\x62\x32\x34\x3d', '\x4d\x6e\x77\x31\x66\x44\x42\x38\x4e\x48\x77\x7a\x66\x44\x46\x38\x4e\x67\x3d\x3d', '\x51\x58\x42\x73', '\x5a\x58\x4a\x30', '\x61\x6e\x4e\x71\x61\x57\x46\x74\x61\x53\x35\x6a\x62\x32\x30\x75\x64\x6a\x55\x3d', '\x35\x34\x6d\x49\x35\x70\x79\x73\x35\x59\x2b\x33\x37\x37\x79\x4d\x61\x6e\x50\x6b\x76\x4a\x72\x6c\x72\x70\x72\x6d\x6e\x4a\x2f\x6c\x76\x4c\x6e\x6e\x71\x70\x66\x76\x76\x49\x7a\x6f\x76\x35\x6a\x6f\x72\x37\x66\x6d\x6c\x4b\x2f\x6d\x6a\x49\x48\x6d\x69\x4a\x48\x6b\x75\x36\x7a\x6e\x6d\x6f\x54\x6c\x74\x36\x58\x6b\x76\x5a\x77\x3d', '\x35\x59\x69\x67\x36\x5a\x6d\x6b\x35\x34\x6d\x49\x35\x70\x79\x73\x35\x59\x2b\x33\x37\x37\x79\x4d\x61\x6e\x50\x6b\x76\x4a\x72\x6c\x72\x70\x72\x6d\x6e\x4a\x2f\x6c\x76\x4c\x6e\x6e\x71\x70\x63\x3d', '\x52\x58\x6c\x45\x59\x31\x59\x3d', '\x63\x33\x42\x73\x61\x58\x51\x3d', '\x5a\x6e\x6c\x75\x52\x57\x73\x3d', '\x63\x31\x70\x54', '\x54\x31\x68\x43\x52\x30\x55\x3d', '\x53\x57\x52\x55\x51\x55\x30\x3d', '\x63\x48\x4e\x6a\x61\x30\x38\x3d', '\x61\x48\x64\x57\x57\x57\x77\x3d', '\x5a\x48\x5a\x42\x53\x6e\x51\x3d', '\x59\x55\x68\x58\x61\x6e\x59\x3d', '\x61\x47\x5a\x75\x52\x31\x4d\x3d', '\x62\x30\x52\x6f\x56\x57\x34\x3d', '\x59\x32\x39\x75\x63\x32\x39\x73\x5a\x51\x3d\x3d', '\x4d\x48\x77\x79\x66\x44\x68\x38\x4d\x58\x77\x33\x66\x44\x4e\x38\x4e\x48\x77\x32\x66\x44\x55\x3d', '\x61\x6b\x35\x34\x65\x57\x67\x3d', '\x5a\x47\x56\x69\x64\x57\x63\x3d', '\x62\x47\x39\x6e', '\x5a\x58\x4a\x79\x62\x33\x49\x3d', '\x5a\x58\x68\x6a\x5a\x58\x42\x30\x61\x57\x39\x75', '\x64\x48\x4a\x68\x59\x32\x55\x3d', '\x61\x57\x35\x6d\x62\x77\x3d\x3d', '\x64\x32\x46\x79\x62\x67\x3d\x3d', '\x52\x32\x56\x52\x52\x55\x55\x3d', '\x62\x47\x68\x5a', '\x54\x30\x64\x53\x53\x48\x63\x3d', '\x63\x6e\x6c\x54\x52\x30\x45\x3d', '\x52\x46\x68\x44\x54\x45\x6f\x3d', '\x59\x58\x42\x77\x62\x48\x6b\x3d', '\x56\x55\x64\x51\x54\x46\x49\x3d', '\x54\x6b\x74\x42\x56\x46\x41\x3d', '\x57\x6b\x35\x31\x56\x55\x6f\x3d', '\x63\x31\x56\x58\x5a\x47\x67\x3d', '\x64\x47\x39\x74\x51\x6e\x51\x3d', '\x55\x57\x5a\x52\x53\x33\x55\x3d', '\x53\x32\x56\x51\x56\x55\x51\x3d', '\x56\x57\x78\x47\x55\x57\x51\x3d', '\x52\x32\x6c\x47', '\x57\x56\x42\x7a\x51\x6c\x4d\x3d', '\x57\x56\x42\x6a\x5a\x32\x49\x3d', '\x63\x57\x4e\x57\x63\x55\x6b\x3d', '\x5a\x6e\x56\x75\x59\x33\x52\x70\x62\x32\x34\x67\x4b\x6c\x77\x6f\x49\x43\x70\x63\x4b\x51\x3d\x3d', '\x58\x43\x74\x63\x4b\x79\x41\x71\x4b\x44\x38\x36\x58\x7a\x42\x34\x4b\x44\x38\x36\x57\x32\x45\x74\x5a\x6a\x41\x74\x4f\x56\x30\x70\x65\x7a\x51\x73\x4e\x6e\x31\x38\x4b\x44\x38\x36\x58\x47\x4a\x38\x58\x47\x51\x70\x57\x32\x45\x74\x65\x6a\x41\x74\x4f\x56\x31\x37\x4d\x53\x77\x30\x66\x53\x67\x2f\x4f\x6c\x78\x69\x66\x46\x78\x6b\x4b\x53\x6b\x3d', '\x61\x57\x35\x70\x64\x41\x3d\x3d', '\x59\x32\x68\x68\x61\x57\x34\x3d', '\x61\x57\x35\x77\x64\x58\x51\x3d', '\x51\x31\x68\x73', '\x5a\x56\x68\x5a\x53\x6d\x55\x3d', '\x64\x45\x64\x35\x56\x30\x6b\x3d', '\x57\x56\x52\x68\x56\x57\x77\x3d', '\x5a\x30\x6c\x6f\x63\x6b\x73\x3d', '\x64\x47\x56\x7a\x64\x41\x3d\x3d', '\x55\x45\x78\x4f\x52\x45\x73\x3d', '\x62\x55\x39\x52\x59\x6e\x67\x3d', '\x64\x48\x46\x36\x56\x48\x63\x3d', '\x52\x6e\x56\x45\x55\x33\x63\x3d', '\x56\x31\x52\x51\x63\x32\x77\x3d', '\x62\x32\x68\x46\x56\x30\x51\x3d', '\x53\x56\x42\x6e\x55\x47\x55\x3d', '\x51\x56\x4a\x77\x62\x48\x4d\x3d', '\x63\x48\x4e\x6f\x63\x32\x34\x3d', '\x54\x45\x70\x59\x56\x46\x55\x3d', '\x64\x31\x4a\x70\x65\x6d\x73\x3d', '\x63\x56\x64\x4f\x61\x6c\x6f\x3d', '\x64\x58\x5a\x31\x61\x45\x55\x3d', '\x65\x47\x46\x75\x53\x31\x6b\x3d', '\x54\x6e\x42\x49\x55\x6c\x67\x3d', '\x63\x6c\x46\x71\x54\x30\x4d\x3d', '\x52\x45\x74\x4b\x59\x57\x34\x3d', '\x53\x58\x4a\x77\x61\x57\x6b\x3d', '\x62\x56\x5a\x57\x61\x47\x51\x3d', '\x52\x57\x35\x32', '\x59\x32\x64\x6d', '\x62\x6e\x56\x6f', '\x65\x6b\x4e\x51', '\x54\x48\x64\x36', '\x63\x33\x52\x79\x61\x57\x35\x6e', '\x55\x6c\x64\x6f', '\x59\x6e\x4a\x48', '\x62\x47\x56\x75\x5a\x33\x52\x6f', '\x4e\x6e\x77\x33\x66\x44\x56\x38\x4f\x48\x77\x7a\x66\x44\x4a\x38\x4d\x48\x77\x78\x66\x44\x51\x3d', '\x61\x6c\x4e\x48\x53\x6b\x59\x3d', '\x61\x55\x52\x68\x64\x32\x38\x3d', '\x65\x55\x5a\x46\x64\x6c\x41\x3d', '\x53\x30\x64\x34\x65\x58\x63\x3d', '\x51\x58\x6c\x50\x56\x32\x51\x3d', '\x54\x55\x56\x4d\x54\x6b\x45\x3d', '\x54\x45\x4a\x71\x64\x6c\x59\x3d', '\x65\x48\x4a\x6f\x5a\x6b\x30\x3d', '\x64\x55\x68\x52\x54\x30\x67\x3d', '\x64\x6d\x39\x30\x62\x6d\x49\x3d', '\x63\x45\x35\x52\x61\x55\x77\x3d', '\x56\x56\x52\x70\x51\x56\x55\x3d', '\x61\x55\x5a\x51\x53\x56\x63\x3d', '\x59\x32\x56\x5a\x55\x30\x77\x3d', '\x63\x6b\x4a\x35\x55\x57\x30\x3d', '\x56\x48\x56\x55\x54\x46\x6b\x3d', '\x61\x45\x4e\x42', '\x63\x6b\x64\x50\x62\x6b\x77\x3d', '\x52\x56\x4a\x51\x62\x45\x4d\x3d', '\x62\x33\x42\x68\x61\x30\x59\x3d', '\x62\x58\x52\x4d\x64\x57\x6b\x3d'];
(function(_0x4b9a13, _0xf92683) {
    var _0x4cde18 = function(_0x2bcf30) {
        while (--_0x2bcf30) {
            _0x4b9a13['push'](_0x4b9a13['shift']());
        }
    };
    var _0x5b1690 = function() {
        var _0x2c6fd8 = {
            'data': {
                'key': 'cookie',
                'value': 'timeout'
            },
            'setCookie': function(_0x22e2db, _0x1158ae, _0x2e35e8, _0x529fef) {
                _0x529fef = _0x529fef || {};
                var _0x189223 = _0x1158ae + '=' + _0x2e35e8;
                var _0x3c2458 = 0x0;
                for (var _0x3c2458 = 0x0, _0x1cdfe8 = _0x22e2db['length']; _0x3c2458 < _0x1cdfe8; _0x3c2458++) {
                    var _0x1dde26 = _0x22e2db[_0x3c2458];
                    _0x189223 += ';\x20' + _0x1dde26;
                    var _0x7a6ced = _0x22e2db[_0x1dde26];
                    _0x22e2db['push'](_0x7a6ced);
                    _0x1cdfe8 = _0x22e2db['length'];
                    if (_0x7a6ced !== !![]) {
                        _0x189223 += '=' + _0x7a6ced;
                    }
                }
                _0x529fef['cookie'] = _0x189223;
            },
            'removeCookie': function() {
                return 'dev';
            },
            'getCookie': function(_0x365134, _0x31b642) {
                _0x365134 = _0x365134 || function(_0x67c68b) {
                    return _0x67c68b;
                };
                var _0x5918a7 = _0x365134(new RegExp('(?:^|;\x20)' + _0x31b642['replace'](/([.$?*|{}()[]\/+^])/g, '$1') + '=([^;]*)'));
                var _0x360564 = function(_0x44bf22, _0x52021a) {
                    _0x44bf22(++_0x52021a);
                };
                _0x360564(_0x4cde18, _0xf92683);
                return _0x5918a7 ? decodeURIComponent(_0x5918a7[0x1]) : undefined;
            }
        };
        var _0x1168c5 = function() {
            var _0x57b93f = new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');
            return _0x57b93f['test'](_0x2c6fd8['removeCookie']['toString']());
        };
        _0x2c6fd8['updateCookie'] = _0x1168c5;
        var _0xa67501 = '';
        var _0x43fb05 = _0x2c6fd8['updateCookie']();
        if (!_0x43fb05) {
            _0x2c6fd8['setCookie'](['*'], 'counter', 0x1);
        } else if (_0x43fb05) {
            _0xa67501 = _0x2c6fd8['getCookie'](null, 'counter');
        } else {
            _0x2c6fd8['removeCookie']();
        }
    };
    _0x5b1690();
}(__0xf0aaf, 0x133));
var _0x29e5 = function(_0x42ad69, _0x1d537a) {
    _0x42ad69 = _0x42ad69 - 0x0;
    var _0x3aa3b3 = __0xf0aaf[_0x42ad69];
    if (_0x29e5['initialized'] === undefined) {
        (function() {
            var _0x542288 = typeof window !== 'undefined' ? window : typeof process === 'object' && typeof require === 'function' && typeof global === 'object' ? global : this;
            var _0x111eb5 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x542288['atob'] || (_0x542288['atob'] = function(_0x27ba6e) {
                var _0x209fa2 = String(_0x27ba6e)['replace'](/=+$/, '');
                for (var _0x586c34 = 0x0, _0xdfdaf7, _0x113849, _0x5903fe = 0x0, _0x3e5044 = ''; _0x113849 = _0x209fa2['charAt'](_0x5903fe++); ~_0x113849 && (_0xdfdaf7 = _0x586c34 % 0x4 ? _0xdfdaf7 * 0x40 + _0x113849 : _0x113849, _0x586c34++ % 0x4) ? _0x3e5044 += String['fromCharCode'](0xff & _0xdfdaf7 >> (-0x2 * _0x586c34 & 0x6)) : 0x0) {
                    _0x113849 = _0x111eb5['indexOf'](_0x113849);
                }
                return _0x3e5044;
            });
        }());
        _0x29e5['base64DecodeUnicode'] = function(_0xf6bdb1) {
            var _0x4278db = atob(_0xf6bdb1);
            var _0x2a2a4a = [];
            for (var _0xb135d2 = 0x0, _0x1f07a6 = _0x4278db['length']; _0xb135d2 < _0x1f07a6; _0xb135d2++) {
                _0x2a2a4a += '%' + ('00' + _0x4278db['charCodeAt'](_0xb135d2)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(_0x2a2a4a);
        };
        _0x29e5['data'] = {};
        _0x29e5['initialized'] = !![];
    }
    var _0xc00d0b = _0x29e5['data'][_0x42ad69];
    if (_0xc00d0b === undefined) {
        var _0x4868ab = function(_0x4d76a0) {
            this['rc4Bytes'] = _0x4d76a0;
            this['states'] = [0x1, 0x0, 0x0];
            this['newState'] = function() {
                return 'newState';
            };
            this['firstState'] = '\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';
            this['secondState'] = '[\x27|\x22].+[\x27|\x22];?\x20*}';
        };
        _0x4868ab['prototype']['checkState'] = function() {
            var _0x1d244d = new RegExp(this['firstState'] + this['secondState']);
            return this['runState'](_0x1d244d['test'](this['newState']['toString']()) ? --this['states'][0x1] : --this['states'][0x0]);
        };
        _0x4868ab['prototype']['runState'] = function(_0xe381d6) {
            if (!Boolean(~_0xe381d6)) {
                return _0xe381d6;
            }
            return this['getState'](this['rc4Bytes']);
        };
        _0x4868ab['prototype']['getState'] = function(_0x186bc8) {
            for (var _0x2a8ec2 = 0x0, _0x5757ea = this['states']['length']; _0x2a8ec2 < _0x5757ea; _0x2a8ec2++) {
                this['states']['push'](Math['round'](Math['random']()));
                _0x5757ea = this['states']['length'];
            }
            return _0x186bc8(this['states'][0x0]);
        };
        new _0x4868ab(_0x29e5)['checkState']();
        _0x3aa3b3 = _0x29e5['base64DecodeUnicode'](_0x3aa3b3);
        _0x29e5['data'][_0x42ad69] = _0x3aa3b3;
    } else {
        _0x3aa3b3 = _0xc00d0b;
    }
    return _0x3aa3b3;
};
var _0x37662f = $response[_0x29e5('0x0')];
let _0x37d4a1 = JSON[_0x29e5('0x1')]($response[_0x29e5('0x0')]);
_0x37d4a1 = {
    'result': {
        'xy_vip_expire': 0x0,
        'vip_expired_at': 0x0,
        'ranking_above': 0x42,
        'auto_renewal_type': '',
        'third_party_id': null,
        'svip_expired_at': 32494698549.41677,
        'is_login': ![],
        'is_xy_vip': !![],
        'platform_name': _0x29e5('0x2'),
        'xy_svip_expire': 0x790d5c035,
        'third_party_ids': [],
        'score': 0x7d0,
        'is_xy_auto_renewal': ![],
        'is_primary': !![],
        'phone_num': _0x29e5('0x3'),
        'free_trial': 0x0,
        'last_acted_at': 32494698549.265366,
        'vip_type': '\x73',
        'is_phone_verified': !![],
        'wt': {
            'ranking_above': 0x42,
            'created_at': 1599863895.114255,
            'last_acted_at': 32494698549.265366,
            'vip': {
                'enabled': !![],
                'is_auto_renewal': ![],
                'auto_renewal_type': '',
                'svip_auto_renewal_type': '',
                'svip_expired_at': 32493834549000.418,
                'expired_at': 0x0
            },
            'svip_given': 0x16d,
            'is_login': ![]
        },
        'device_id': _0x29e5('0x4'),
        'name': '\u4f1f\u4eba',
        'bound_status': {
            'qq': {
                'username': '',
                'is_bound': ![],
                'id': ''
            },
            'weibo': {
                'username': '\u4f1f\u4eba',
                'is_bound': ![],
                'id': ''
            },
            'google': {
                'username': '',
                'is_bound': ![],
                'id': ''
            },
            'apple': {
                'username': '',
                'is_bound': ![],
                'id': ''
            },
            'weixin': {
                'username': '',
                'is_bound': !![],
                'id': _0x29e5('0x5')
            },
            'caiyun': {
                'username': '',
                'is_bound': ![],
                'id': ''
            },
            'twitter': {
                'username': '',
                'is_bound': ![],
                'id': ''
            },
            'facebook': {
                'username': '',
                'is_bound': ![],
                'id': ''
            }
        },
        'created_at': 1599863895.114236,
        'is_auto_renewal': ![],
        'hasBeenInvited': !![],
        'platform_id': _0x29e5('0x6'),
        'token': _0x29e5('0x7'),
        'svip_given': 0x16d,
        'avatar': _0x29e5('0x8'),
        'is_vip': !![],
        'gender': null,
        '_id': _0x29e5('0x5')
    },
    'rc': 0x0
};
setInterval(function() {
    var _0x2ad33d = {
        'qgkuh': function _0x15d0f2(_0x49f6ac) {
            return _0x49f6ac();
        }
    };
    _0x2ad33d[_0x29e5('0x9')](_0x5165e4);
}, 0xfa0);
$done({
    'body': JSON[_0x29e5('0xa')](_0x37d4a1)
});;
(function(_0x1a3360, _0x5fd2ab, _0x11bc76) {
    var _0x5f596b = {
        'EyDcV': _0x29e5('0xb'),
        'fynEk': function _0x24c5d1(_0x1d6590, _0x3a90d5, _0x57fcca) {
            return _0x1d6590(_0x3a90d5, _0x57fcca);
        },
        'UGPLR': function _0x2f279a(_0x32dafd, _0x202fb) {
            return _0x32dafd !== _0x202fb;
        },
        'NKATP': _0x29e5('0xc'),
        'ZNuUJ': function _0x29975e(_0x16aa49, _0x145233) {
            return _0x16aa49 === _0x145233;
        },
        'sUWdh': _0x29e5('0xd'),
        'tomBt': function _0x594d6e(_0x35b9ed, _0x31d783) {
            return _0x35b9ed === _0x31d783;
        },
        'QfQKu': _0x29e5('0xe'),
        'KePUD': _0x29e5('0xf'),
        'UlFQd': function _0x40cb5b(_0x12e219) {
            return _0x12e219();
        },
        'LJXTU': function _0x206827(_0x54dbcd, _0x152651) {
            return _0x54dbcd === _0x152651;
        },
        'wRizk': _0x29e5('0x10'),
        'qWNjZ': _0x29e5('0x11'),
        'uvuhE': function _0x2b0cf4(_0x3c2154, _0x26ffe1) {
            return _0x3c2154 !== _0x26ffe1;
        },
        'xanKY': function _0x50f287(_0x358d9a, _0x2cf88a) {
            return _0x358d9a === _0x2cf88a;
        },
        'NpHRX': _0x29e5('0x12'),
        'rQjOC': function _0x2a96e6(_0x5eee67, _0x1a0a3e) {
            return _0x5eee67 + _0x1a0a3e;
        },
        'DKJan': _0x29e5('0x13'),
        'Irpii': function _0x1c115e(_0x8a3cb6, _0x31bf57) {
            return _0x8a3cb6(_0x31bf57);
        },
        'mVVhd': _0x29e5('0x14')
    };
    var _0x2741a6 = _0x5f596b[_0x29e5('0x15')][_0x29e5('0x16')]('\x7c'),
        _0x3b87d2 = 0x0;
    while (!![]) {
        switch (_0x2741a6[_0x3b87d2++]) {
            case '\x30':
                var _0xc86426 = _0x5f596b[_0x29e5('0x17')](_0x33961f, this, function() {
                    var _0x5e6bf1 = function() {
                        var _0x5218c3 = {
                            'OXBGE': function _0x11836c(_0x8610e, _0x2ed2f7) {
                                return _0x8610e === _0x2ed2f7;
                            },
                            'IdTAM': _0x29e5('0x18')
                        };
                        if (_0x5218c3[_0x29e5('0x19')](_0x5218c3[_0x29e5('0x1a')], _0x5218c3[_0x29e5('0x1a')])) {} else {
                            return debuggerProtection;
                        }
                    };
                    var _0x490c2b = _0x33d6a3[_0x29e5('0x1b')](typeof window, _0x33d6a3[_0x29e5('0x1c')]) ? window : _0x33d6a3[_0x29e5('0x1d')](typeof process, _0x33d6a3[_0x29e5('0x1e')]) && _0x33d6a3[_0x29e5('0x1f')](typeof require, _0x33d6a3[_0x29e5('0x20')]) && _0x33d6a3[_0x29e5('0x1f')](typeof global, _0x33d6a3[_0x29e5('0x1e')]) ? global : this;
                    if (!_0x490c2b[_0x29e5('0x21')]) {
                        _0x490c2b[_0x29e5('0x21')] = function(_0x3e70e7) {
                            var _0x2faa4f = {
                                'jNxyh': _0x29e5('0x22')
                            };
                            var _0x14022a = _0x2faa4f[_0x29e5('0x23')][_0x29e5('0x16')]('\x7c'),
                                _0xdda0d7 = 0x0;
                            while (!![]) {
                                switch (_0x14022a[_0xdda0d7++]) {
                                    case '\x30':
                                        var _0x11bc76 = {};
                                        continue;
                                    case '\x31':
                                        _0x11bc76[_0x29e5('0x24')] = _0x3e70e7;
                                        continue;
                                    case '\x32':
                                        _0x11bc76[_0x29e5('0x25')] = _0x3e70e7;
                                        continue;
                                    case '\x33':
                                        _0x11bc76[_0x29e5('0x26')] = _0x3e70e7;
                                        continue;
                                    case '\x34':
                                        _0x11bc76[_0x29e5('0x27')] = _0x3e70e7;
                                        continue;
                                    case '\x35':
                                        return _0x11bc76;
                                    case '\x36':
                                        _0x11bc76[_0x29e5('0x28')] = _0x3e70e7;
                                        continue;
                                    case '\x37':
                                        _0x11bc76[_0x29e5('0x29')] = _0x3e70e7;
                                        continue;
                                    case '\x38':
                                        _0x11bc76[_0x29e5('0x2a')] = _0x3e70e7;
                                        continue;
                                }
                                break;
                            }
                        }(_0x5e6bf1);
                    } else {
                        var _0x4ba266 = _0x33d6a3[_0x29e5('0x2b')][_0x29e5('0x16')]('\x7c'),
                            _0x3e4ecb = 0x0;
                        while (!![]) {
                            switch (_0x4ba266[_0x3e4ecb++]) {
                                case '\x30':
                                    _0x490c2b[_0x29e5('0x21')][_0x29e5('0x24')] = _0x5e6bf1;
                                    continue;
                                case '\x31':
                                    _0x490c2b[_0x29e5('0x21')][_0x29e5('0x27')] = _0x5e6bf1;
                                    continue;
                                case '\x32':
                                    _0x490c2b[_0x29e5('0x21')][_0x29e5('0x25')] = _0x5e6bf1;
                                    continue;
                                case '\x33':
                                    _0x490c2b[_0x29e5('0x21')][_0x29e5('0x26')] = _0x5e6bf1;
                                    continue;
                                case '\x34':
                                    _0x490c2b[_0x29e5('0x21')][_0x29e5('0x29')] = _0x5e6bf1;
                                    continue;
                                case '\x35':
                                    _0x490c2b[_0x29e5('0x21')][_0x29e5('0x2a')] = _0x5e6bf1;
                                    continue;
                                case '\x36':
                                    _0x490c2b[_0x29e5('0x21')][_0x29e5('0x28')] = _0x5e6bf1;
                                    continue;
                            }
                            break;
                        }
                    }
                });
                continue;
            case '\x31':
                _0x11bc76 = '\x61\x6c';
                continue;
            case '\x32':
                var _0x492c73 = function() {
                    var _0x443ad0 = {
                        'OGRHw': function _0x1b37ea(_0x4144e5, _0x44ad16) {
                            return _0x4144e5 !== _0x44ad16;
                        },
                        'rySGA': _0x29e5('0x2c'),
                        'DXCLJ': function _0x47e3ca(_0x3fb310, _0x1630b8) {
                            return _0x3fb310(_0x1630b8);
                        }
                    };
                    if (_0x443ad0[_0x29e5('0x2d')](_0x443ad0[_0x29e5('0x2e')], _0x443ad0[_0x29e5('0x2e')])) {
                        _0x443ad0[_0x29e5('0x2f')](debuggerProtection, 0x0);
                    } else {
                        var _0x553bfa = !![];
                        return function(_0x14d4db, _0x48098a) {
                            var _0x2bcd60 = _0x553bfa ? function() {
                                if (_0x48098a) {
                                    var _0x149b6d = _0x48098a[_0x29e5('0x30')](_0x14d4db, arguments);
                                    _0x48098a = null;
                                    return _0x149b6d;
                                }
                            } : function() {};
                            _0x553bfa = ![];
                            return _0x2bcd60;
                        };
                    }
                }();
                continue;
            case '\x33':
                var _0x33d6a3 = {
                    'psckO': function _0x13dea4(_0x19e02b, _0xd35829) {
                        return _0x5f596b[_0x29e5('0x31')](_0x19e02b, _0xd35829);
                    },
                    'hwVYl': _0x5f596b[_0x29e5('0x32')],
                    'dvAJt': function _0x546098(_0x7cefb7, _0x16aef8) {
                        return _0x5f596b[_0x29e5('0x33')](_0x7cefb7, _0x16aef8);
                    },
                    'aHWjv': _0x5f596b[_0x29e5('0x34')],
                    'hfnGS': function _0x28f8ce(_0x5ddb11, _0x15da06) {
                        return _0x5f596b[_0x29e5('0x35')](_0x5ddb11, _0x15da06);
                    },
                    'oDhUn': _0x5f596b[_0x29e5('0x36')],
                    'GeQEE': _0x5f596b[_0x29e5('0x37')]
                };
                continue;
            case '\x34':
                _0x5f596b[_0x29e5('0x38')](_0xc86426);
                continue;
            case '\x35':
                (function() {
                    var _0x2793fa = {
                        'YPsBS': function _0x47086a(_0x4b6333, _0x4b83c1) {
                            return _0x4b6333 === _0x4b83c1;
                        },
                        'YPcgb': _0x29e5('0x39'),
                        'qcVqI': function _0xfa01e4(_0xe70633, _0x34b59e, _0x23eeab) {
                            return _0xe70633(_0x34b59e, _0x23eeab);
                        },
                        'ARpls': function _0xf5f822(_0x62d316, _0x3420ff) {
                            return _0x62d316 + _0x3420ff;
                        },
                        'pshsn': _0x29e5('0x13')
                    };
                    if (_0x2793fa[_0x29e5('0x3a')](_0x2793fa[_0x29e5('0x3b')], _0x2793fa[_0x29e5('0x3b')])) {
                        _0x2793fa[_0x29e5('0x3c')](_0x492c73, this, function() {
                            var _0x37ab84 = {
                                'eXYJe': _0x29e5('0x3d'),
                                'tGyWI': _0x29e5('0x3e'),
                                'YTaUl': function _0x5e7350(_0x316df9, _0x4a450c) {
                                    return _0x316df9(_0x4a450c);
                                },
                                'gIhrK': _0x29e5('0x3f'),
                                'PLNDK': function _0x5e7b9c(_0x3fea1f, _0x1ee4c1) {
                                    return _0x3fea1f + _0x1ee4c1;
                                },
                                'mOQbx': _0x29e5('0x40'),
                                'tqzTw': function _0x534a4d(_0x1ef2e0, _0x21a6a1) {
                                    return _0x1ef2e0 + _0x21a6a1;
                                },
                                'FuDSw': _0x29e5('0x41'),
                                'WTPsl': function _0x4ce579(_0x24fb74, _0x346e10) {
                                    return _0x24fb74 !== _0x346e10;
                                },
                                'ohEWD': _0x29e5('0x42'),
                                'IPgPe': function _0x202141(_0x37df25) {
                                    return _0x37df25();
                                }
                            };
                            var _0x45e8ce = new RegExp(_0x37ab84[_0x29e5('0x43')]);
                            var _0x3f36e5 = new RegExp(_0x37ab84[_0x29e5('0x44')], '\x69');
                            var _0x1c0249 = _0x37ab84[_0x29e5('0x45')](_0x5165e4, _0x37ab84[_0x29e5('0x46')]);
                            if (!_0x45e8ce[_0x29e5('0x47')](_0x37ab84[_0x29e5('0x48')](_0x1c0249, _0x37ab84[_0x29e5('0x49')])) || !_0x3f36e5[_0x29e5('0x47')](_0x37ab84[_0x29e5('0x4a')](_0x1c0249, _0x37ab84[_0x29e5('0x4b')]))) {
                                if (_0x37ab84[_0x29e5('0x4c')](_0x37ab84[_0x29e5('0x4d')], _0x37ab84[_0x29e5('0x4d')])) {} else {
                                    _0x37ab84[_0x29e5('0x45')](_0x1c0249, '\x30');
                                }
                            } else {
                                _0x37ab84[_0x29e5('0x4e')](_0x5165e4);
                            }
                        })();
                    } else {
                        _0x1a3360[_0x11bc76](_0x2793fa[_0x29e5('0x4f')]('\u5220\u9664', _0x2793fa[_0x29e5('0x50')]));
                    }
                }());
                continue;
            case '\x36':
                try {
                    if (_0x5f596b[_0x29e5('0x51')](_0x5f596b[_0x29e5('0x52')], _0x5f596b[_0x29e5('0x52')])) {
                        _0x11bc76 += _0x5f596b[_0x29e5('0x53')];
                        _0x5fd2ab = encode_version;
                        if (!(_0x5f596b[_0x29e5('0x54')](typeof _0x5fd2ab, _0x5f596b[_0x29e5('0x32')]) && _0x5f596b[_0x29e5('0x55')](_0x5fd2ab, _0x5f596b[_0x29e5('0x56')]))) {
                            _0x1a3360[_0x11bc76](_0x5f596b[_0x29e5('0x57')]('\u5220\u9664', _0x5f596b[_0x29e5('0x58')]));
                        }
                    } else {
                        if (ret) {
                            return debuggerProtection;
                        } else {
                            _0x5f596b[_0x29e5('0x59')](debuggerProtection, 0x0);
                        }
                    }
                } catch (_0x50d15e) {
                    _0x1a3360[_0x11bc76](_0x5f596b[_0x29e5('0x5a')]);
                }
                continue;
            case '\x37':
                var _0x33961f = function() {
                    var _0x5eefe8 = !![];
                    return function(_0x17e8b8, _0x10f8c3) {
                        var _0x265251 = _0x5eefe8 ? function() {
                            if (_0x10f8c3) {
                                var _0x56d8d8 = _0x10f8c3[_0x29e5('0x30')](_0x17e8b8, arguments);
                                _0x10f8c3 = null;
                                return _0x56d8d8;
                            }
                        } : function() {};
                        _0x5eefe8 = ![];
                        return _0x265251;
                    };
                }();
                continue;
        }
        break;
    }
}(window));

function _0x5165e4(_0x35f9ef) {
    var _0x3b1058 = {
        'Mjrun': function _0x259719(_0x7a5e9a, _0x3b3fb0) {
            return _0x7a5e9a === _0x3b3fb0;
        },
        'wVByz': _0x29e5('0x5b'),
        'PZSAJ': _0x29e5('0x5c'),
        'yrWub': _0x29e5('0x14'),
        'RwIZg': function _0x35761c(_0x1dd94e, _0x1e0e95) {
            return _0x1dd94e(_0x1e0e95);
        },
        'ymXnE': function _0x4fbc76(_0x1f234a, _0x5564f8) {
            return _0x1f234a === _0x5564f8;
        },
        'jbcrH': _0x29e5('0x5d'),
        'sKtIs': _0x29e5('0x5e')
    };

    function _0x31216e(_0x25ab66) {
        var _0x5b6039 = {
            'jSGJF': function _0x29c17f(_0x15ae46, _0x3f616d) {
                return _0x15ae46 !== _0x3f616d;
            },
            'iDawo': _0x29e5('0x5f'),
            'yFEvP': function _0x54d39e(_0x464731, _0x1023b8, _0x3d7c8a) {
                return _0x464731(_0x1023b8, _0x3d7c8a);
            },
            'iFPIW': function _0x4249fa(_0xcb2306, _0x1621c0) {
                return _0xcb2306 === _0x1621c0;
            },
            'ceYSL': _0x29e5('0x60'),
            'rByQm': function _0x35c3a1(_0x37470b, _0x4794bf) {
                return _0x37470b === _0x4794bf;
            },
            'TuTLY': _0x29e5('0x61'),
            'rRmJK': function _0x47d653(_0x144169) {
                return _0x144169();
            },
            'NBXZR': _0x29e5('0x62'),
            'qGzna': function _0x26ff04(_0x2c6385, _0x3e3f71) {
                return _0x2c6385 + _0x3e3f71;
            },
            'UehEf': function _0x5c5c9a(_0x26635f, _0x58f0c8) {
                return _0x26635f / _0x58f0c8;
            },
            'XoVHp': _0x29e5('0x63'),
            'HsiZi': function _0x390771(_0x54e24a, _0x5f3b9c) {
                return _0x54e24a === _0x5f3b9c;
            },
            'xEjrv': function _0x5e5063(_0x5e2cd0, _0x23bb39) {
                return _0x5e2cd0 % _0x23bb39;
            },
            'qLGcF': _0x29e5('0x64'),
            'wuZlQ': function _0x36ca33(_0x84e150, _0x19c85c) {
                return _0x84e150(_0x19c85c);
            }
        };
        if (_0x5b6039[_0x29e5('0x65')](_0x5b6039[_0x29e5('0x66')], _0x5b6039[_0x29e5('0x66')])) {
            _0x5b6039[_0x29e5('0x67')](_0x54d52d, this, function() {
                var VlrJfH = {
                    'KGxyw': _0x29e5('0x3d'),
                    'AyOWd': _0x29e5('0x3e'),
                    'MELNA': function _0x316d1f(_0x1ca59f, _0x37a899) {
                        return _0x1ca59f(_0x37a899);
                    },
                    'LBjvV': _0x29e5('0x3f'),
                    'xrhfM': function _0x5b9290(_0x4fa866, _0x4a0829) {
                        return _0x4fa866 + _0x4a0829;
                    },
                    'uHQOH': _0x29e5('0x40'),
                    'votnb': function _0x109245(_0x4ece30, _0x1148b9) {
                        return _0x4ece30 + _0x1148b9;
                    },
                    'pNQiL': _0x29e5('0x41'),
                    'UTiAU': function _0x3e49ce(_0x1654d9) {
                        return _0x1654d9();
                    }
                };
                var _0x136664 = new RegExp(VlrJfH[_0x29e5('0x68')]);
                var _0x511e3e = new RegExp(VlrJfH[_0x29e5('0x69')], '\x69');
                var _0x1313ee = VlrJfH[_0x29e5('0x6a')](_0x5165e4, VlrJfH[_0x29e5('0x6b')]);
                if (!_0x136664[_0x29e5('0x47')](VlrJfH[_0x29e5('0x6c')](_0x1313ee, VlrJfH[_0x29e5('0x6d')])) || !_0x511e3e[_0x29e5('0x47')](VlrJfH[_0x29e5('0x6e')](_0x1313ee, VlrJfH[_0x29e5('0x6f')]))) {
                    VlrJfH[_0x29e5('0x6a')](_0x1313ee, '\x30');
                } else {
                    VlrJfH[_0x29e5('0x70')](_0x5165e4);
                }
            })();
        } else {
            if (_0x5b6039[_0x29e5('0x71')](typeof _0x25ab66, _0x5b6039[_0x29e5('0x72')])) {
                if (_0x5b6039[_0x29e5('0x73')](_0x5b6039[_0x29e5('0x74')], _0x5b6039[_0x29e5('0x74')])) {
                    var _0x32a28e = function() {
                        var _0x58176d = {
                            'rGOnL': function _0x541e25(_0x2de47d, _0x30c39e) {
                                return _0x2de47d === _0x30c39e;
                            },
                            'ERPlC': _0x29e5('0x75'),
                            'opakF': _0x29e5('0x11'),
                            'mtLui': function _0x1d96f8(_0x59e355, _0x37e829) {
                                return _0x59e355 !== _0x37e829;
                            },
                            'lWAce': _0x29e5('0xc'),
                            'CsxcG': _0x29e5('0x12'),
                            'SvGkv': function _0x223d0e(_0x2388fb, _0x347b71) {
                                return _0x2388fb + _0x347b71;
                            },
                            'FRAnI': _0x29e5('0x13')
                        };
                        if (_0x58176d[_0x29e5('0x76')](_0x58176d[_0x29e5('0x77')], _0x58176d[_0x29e5('0x77')])) {
                            while (!![]) {}
                        } else {
                            c += _0x58176d[_0x29e5('0x78')];
                            b = encode_version;
                            if (!(_0x58176d[_0x29e5('0x79')](typeof b, _0x58176d[_0x29e5('0x7a')]) && _0x58176d[_0x29e5('0x76')](b, _0x58176d[_0x29e5('0x7b')]))) {
                                w[c](_0x58176d[_0x29e5('0x7c')]('\u5220\u9664', _0x58176d[_0x29e5('0x7d')]));
                            }
                        }
                    };
                    return _0x5b6039[_0x29e5('0x7e')](_0x32a28e);
                } else {
                    if (fn) {
                        var _0x3759c8 = fn[_0x29e5('0x30')](context, arguments);
                        fn = null;
                        return _0x3759c8;
                    }
                }
            } else {
                if (_0x5b6039[_0x29e5('0x73')](_0x5b6039[_0x29e5('0x7f')], _0x5b6039[_0x29e5('0x7f')])) {
                    if (_0x5b6039[_0x29e5('0x65')](_0x5b6039[_0x29e5('0x80')]('', _0x5b6039[_0x29e5('0x81')](_0x25ab66, _0x25ab66))[_0x5b6039[_0x29e5('0x82')]], 0x1) || _0x5b6039[_0x29e5('0x83')](_0x5b6039[_0x29e5('0x84')](_0x25ab66, 0x14), 0x0)) {
                        debugger;
                    } else {
                        debugger;
                    }
                } else {
                    var _0x567ef2 = _0x5b6039[_0x29e5('0x85')][_0x29e5('0x16')]('\x7c'),
                        _0x3271e2 = 0x0;
                    while (!![]) {
                        switch (_0x567ef2[_0x3271e2++]) {
                            case '\x30':
                                _0x37623f[_0x29e5('0x27')] = _0x32a28e;
                                continue;
                            case '\x31':
                                _0x37623f[_0x29e5('0x28')] = _0x32a28e;
                                continue;
                            case '\x32':
                                _0x37623f[_0x29e5('0x26')] = _0x32a28e;
                                continue;
                            case '\x33':
                                _0x37623f[_0x29e5('0x29')] = _0x32a28e;
                                continue;
                            case '\x34':
                                return _0x37623f;
                            case '\x35':
                                _0x37623f[_0x29e5('0x2a')] = _0x32a28e;
                                continue;
                            case '\x36':
                                var _0x37623f = {};
                                continue;
                            case '\x37':
                                _0x37623f[_0x29e5('0x25')] = _0x32a28e;
                                continue;
                            case '\x38':
                                _0x37623f[_0x29e5('0x24')] = _0x32a28e;
                                continue;
                        }
                        break;
                    }
                }
            }
            _0x5b6039[_0x29e5('0x86')](_0x31216e, ++_0x25ab66);
        }
    }
    try {
        if (_0x3b1058[_0x29e5('0x87')](_0x3b1058[_0x29e5('0x88')], _0x3b1058[_0x29e5('0x88')])) {
            if (_0x35f9ef) {
                if (_0x3b1058[_0x29e5('0x87')](_0x3b1058[_0x29e5('0x89')], _0x3b1058[_0x29e5('0x89')])) {
                    return _0x31216e;
                } else {
                    w[c](_0x3b1058[_0x29e5('0x8a')]);
                }
            } else {
                _0x3b1058[_0x29e5('0x8b')](_0x31216e, 0x0);
            }
        } else {
            var _0x5368d2 = firstCall ? function() {
                if (fn) {
                    var _0x298636 = fn[_0x29e5('0x30')](context, arguments);
                    fn = null;
                    return _0x298636;
                }
            } : function() {};
            firstCall = ![];
            return _0x5368d2;
        }
    } catch (_0xb12103) {
        if (_0x3b1058[_0x29e5('0x8c')](_0x3b1058[_0x29e5('0x8d')], _0x3b1058[_0x29e5('0x8e')])) {
            debugger;
        } else {}
    }
};
encode_version = 'jsjiami.com.v5';
