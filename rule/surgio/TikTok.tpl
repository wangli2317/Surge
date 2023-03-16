# NAME: TikTok https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Surge/TikTok.list
{% macro main(rule) %}
DOMAIN,p16-tiktokcdn-com.akamaized.net,{{ rule }}
DOMAIN-SUFFIX,byteoversea.com,{{ rule }}
DOMAIN-SUFFIX,ibytedtos.com,{{ rule }}
DOMAIN-SUFFIX,ibyteimg.com,{{ rule }}
DOMAIN-SUFFIX,ipstatp.com,{{ rule }}
DOMAIN-SUFFIX,muscdn.com,{{ rule }}
DOMAIN-SUFFIX,musical.ly,{{ rule }}
DOMAIN-SUFFIX,sgpstatp.com,{{ rule }}
DOMAIN-SUFFIX,snssdk.com,{{ rule }}
DOMAIN-SUFFIX,tik-tokapi.com,{{ rule }}
DOMAIN-SUFFIX,tiktok.com,{{ rule }}
DOMAIN-SUFFIX,tiktokcdn.com,{{ rule }}
DOMAIN-SUFFIX,tiktokv.com,{{ rule }}
DOMAIN-KEYWORD,-tiktokcdn-com,{{ rule }}
USER-AGENT,TikTok*,{{ rule }}
{% endmacro %}
