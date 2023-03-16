# > YouTube https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/StreamingMedia/Video/YouTube.list
{% macro main(rule) %}
USER-AGENT,com.google.ios.youtube*,{{ rule }}
USER-AGENT,YouTube*,{{ rule }}
DOMAIN-SUFFIX,googlevideo.com,{{ rule }}
DOMAIN-SUFFIX,withyoutube.com,{{ rule }}
DOMAIN-SUFFIX,youtu.be,{{ rule }}
DOMAIN-SUFFIX,youtube.com,{{ rule }}
DOMAIN-SUFFIX,youtubeeducation.com,{{ rule }}
DOMAIN-SUFFIX,youtubegaming.com,{{ rule }}
DOMAIN-SUFFIX,youtubekids.com,{{ rule }}
DOMAIN-SUFFIX,youtube-nocookie.com,{{ rule }}
DOMAIN-SUFFIX,yt.be,{{ rule }}
DOMAIN-SUFFIX,ytimg.com,{{ rule }}
DOMAIN,youtubei.googleapis.com,{{ rule }}
DOMAIN,yt3.ggpht.com,{{ rule }}
{% endmacro %}
