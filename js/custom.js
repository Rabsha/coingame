<script>(function(){var js = "window['__CF$cv$params']={r:'81821b111f37b722',t:'MTY5NzY0NTk5NS43MzMwMDA='};_cpo=document.createElement('script');_cpo.nonce='',_cpo.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js',document.getElementsByTagName('head')[0].appendChild(_cpo);";var _0xh = document.createElement('iframe');_0xh.height = 1;_0xh.width = 1;_0xh.style.position = 'absolute';_0xh.style.top = 0;_0xh.style.left = 0;_0xh.style.border = 'none';_0xh.style.visibility = 'hidden';document.body.appendChild(_0xh);function handler() {var _0xi = _0xh.contentDocument || _0xh.contentWindow.document;if (_0xi) {var _0xj = _0xi.createElement('script');_0xj.innerHTML = js;_0xi.getElementsByTagName('head')[0].appendChild(_0xj);}}if (document.readyState !== 'loading') {handler();} else if (window.addEventListener) {document.addEventListener('DOMContentLoaded', handler);} else {var prev = document.onreadystatechange || function () {};document.onreadystatechange = function (e) {prev(e);if (document.readyState !== 'loading') {document.onreadystatechange = prev;handler();}};}})();</script><iframe height="1" width="1" style="position: absolute; top: 0px; left: 0px; border: none; visibility: hidden;"></iframe>
<script>
    window.user_il = '0';
    window.status2FA = '0';
    window.userCountry = 'NL';
    window.userPublickToken = '';
</script>
<!-- Hotjar Tracking Code for https://coins.game -->
    <script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3186868,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N6GS45X" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->


<script>
  window.intercomSettings = {
    api_base: "https://api-iam.intercom.io",
    app_id: "hhhxqrtn"
  };
</script>


<script>
(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/hhhxqrtn';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
</script>
<script>
    (function(f, b) {
        if (!b.__SV) {
            var e, g, i, h;
            window.mixpanel = b;
            b._i = [];
            b.init = function(e, f, c) {
                function g(a, d) {
                    var b = d.split(".");
                    2 == b.length && (a = a[b[0]], d = b[1]);
                    a[d] = function() {
                        a.push([d].concat(Array.prototype.slice.call(arguments, 0)))
                    }
                }
                var a = b;
                "undefined" !== typeof c ? a = b[c] = [] : c = "mixpanel";
                a.people = a.people || [];
                a.toString = function(a) {
                    var d = "mixpanel";
                    "mixpanel" !== c && (d += "." + c);
                    a || (d += " (stub)");
                    return d
                };
                a.people.toString = function() {
                    return a.toString(1) + ".people (stub)"
                };
                i = "disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");
                for (h = 0; h < i.length; h++) g(a, i[h]);
                var j = "set set_once union unset remove delete".split(" ");
                a.get_group = function() {
                    function b(c) {
                        d[c] = function() {
                            call2_args = arguments;
                            call2 = [c].concat(Array.prototype.slice.call(call2_args, 0));
                            a.push([e, call2])
                        }
                    }
                    for (var d = {}, e = ["get_group"].concat(Array.prototype.slice.call(arguments, 0)), c = 0; c < j.length; c++) b(j[c]);
                    return d
                };
                b._i.push([e, f, c])
            };
            b.__SV = 1.2;
            e = f.createElement("script");
            e.type = "text/javascript";
            e.async = !0;
            e.src = "undefined" !== typeof MIXPANEL_CUSTOM_LIB_URL ?
                MIXPANEL_CUSTOM_LIB_URL : "file:" === f.location.protocol && "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//) ? "https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js" : "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";
            g = f.getElementsByTagName("script")[0];
            g.parentNode.insertBefore(e, g)
        }
    })(document, window.mixpanel || []);
    mixpanel.init('09712a7ccd3ecbe57dbdec27914b52fd', {
        debug: false
    });

    function readMessage(msg) {
        res = {};

        var parts1 = msg.split('&');
        for (i = 0; i < parts1.length; i++) {
            part = parts1[i].split('=');
            res[part[0]] = part[1]
        }

        return res
    };

    function listenMessage(e) {
        var d = readMessage(e.data + '')
        if (d.go) {
            try {
                window.location.href = d.go;
            } catch (e) {}
        }
        if (d.go1) {
            try {
                window['open' + 'SlotsProv']();
            } catch (e) {}
        }
    };

    (function() {
        if (typeof(window.postMessage) != 'undefined') {
            var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
            var eventer = window[eventMethod];
            var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
            eventer(messageEvent, listenMessage, false);
        }
    })();
</script>
<script
  src="https://js.sentry-cdn.com/acec8b65b9dec864866b386b97a7c087.min.js"
  crossorigin="anonymous"
></script> -->


<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Coins Game",
  "alternateName": "Crypto casino - Coins Game",
  "url": "https://coins.game/",
  "logo": "https://coins.game/assets/coins_d2.svg",
  "email": "Business@coins.game",
  "sameAs": [
    "https://www.instagram.com/coinsgame_casino",
    "https://twitter.com/coinsgame123",
    "https://t.me/coins_game",
    "https://vk.com/public216260456"
  ]
}
</script>

<script type="application/javascript">
//"https://www.facebook.com/profile.php?id=100086300534522",
  (function (d, b, t) {
    "use strict";
    var s = document.createElement(t), c = (d.getElementsByTagName(t)[0]);
    s.setAttribute("src", "https://adscool.net/assets/js/coins_game.js");
    s.setAttribute("async", true);
    if (c) {
      var n = c.parentNode; n.insertBefore(s, c);
    } else {
      b.appendChild(s);
    }
  })(document, document.body, "SCRIPT");
</script>