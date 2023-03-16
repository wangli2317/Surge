# > Amazon Prime Video https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/StreamingMedia/Video/Prime-Video.list
{% macro main(rule) %}
USER-AGENT,InstantVideo.US*,{{ rule }}
USER-AGENT,Prime%20Video*,{{ rule }}
DOMAIN-SUFFIX,aiv-cdn.net,{{ rule }}
DOMAIN-SUFFIX,aiv-delivery.net,{{ rule }}
DOMAIN-SUFFIX,amazonvideo.com,{{ rule }}
DOMAIN-SUFFIX,media-amazon.com,{{ rule }}
DOMAIN-SUFFIX,primevideo.com,{{ rule }}
DOMAIN-SUFFIX,pv-cdn.net,{{ rule }}
DOMAIN,atv-ps.amazon.com,{{ rule }}
DOMAIN,fls-na.amazon.com,{{ rule }}
DOMAIN,avodmp4s3ww-a.akamaihd.net,{{ rule }}
DOMAIN,d25xi40x97liuc.cloudfront.net,{{ rule }}
DOMAIN,dmqdd6hw24ucf.cloudfront.net,{{ rule }}
DOMAIN,dmqdd6hw24ucf.cloudfront.net,{{ rule }}
DOMAIN,d22qjgkvxw22r6.cloudfront.net,{{ rule }}
DOMAIN,d1v5ir2lpwr8os.cloudfront.net,{{ rule }}
DOMAIN,d27xxe7juh1us6.cloudfront.net,{{ rule }}
DOMAIN,www.amazon.com,{{ rule }}
DOMAIN-KEYWORD,avoddashs,{{ rule }}
{% endmacro %}
