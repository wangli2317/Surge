# > Disney+ https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/StreamingMedia/Video/DisneyPlus.list
{% macro main(rule) %}
USER-AGENT,Disney+*,{{ rule }}
DOMAIN-SUFFIX,bamgrid.com,{{ rule }}
DOMAIN-SUFFIX,disneyplus.com,{{ rule }}
DOMAIN-SUFFIX,disney-plus.net,{{ rule }}
DOMAIN-SUFFIX,disneystreaming.com,{{ rule }}
DOMAIN-SUFFIX,dssott.com,{{ rule }}
DOMAIN,cdn.registerdisney.go.com,{{ rule }}
{% endmacro %}
