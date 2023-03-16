# > Netflix https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/StreamingMedia/Video/Netflix.list
{% macro main(rule) %}
USER-AGENT,Argo*,{{ rule }}
DOMAIN-SUFFIX,netflix.com,{{ rule }}
DOMAIN-SUFFIX,netflix.net,{{ rule }}
DOMAIN-SUFFIX,nflxext.com,{{ rule }}
DOMAIN-SUFFIX,nflximg.com,{{ rule }}
DOMAIN-SUFFIX,nflximg.net,{{ rule }}
DOMAIN-SUFFIX,nflxso.net,{{ rule }}
DOMAIN-SUFFIX,nflxvideo.net,{{ rule }}
DOMAIN-KEYWORD,netflixdnstest,{{ rule }}
DOMAIN-KEYWORD,apiproxy-device-prod-nlb-,{{ rule }}
DOMAIN-KEYWORD,dualstack.apiproxy-,{{ rule }}
# GEOIP,NETFLIX,no-resolve,{{ rule }}
{% endmacro %}
