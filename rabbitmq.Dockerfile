FROM rabbitmq

RUN rabbitmq-plugins enable --offline rabbitmq_management

RUN rabbitmq-plugins enable --offline rabbitmq_mqtt

EXPOSE 15672 5672