-- CATEGORY
INSERT INTO
    category (name, description)
VALUES
    (
        'Segurança',
        'Itens destinados à proteção e prevenção de riscos'
    ),
    (
        'Manutenção',
        'Itens utilizados para reparo, conservação e manutenção'
    ),
    (
        'Operacional',
        'Itens utilizados nas atividades operacionais do dia a dia'
    );

-- MANUFACTURER
INSERT INTO
    manufacturer (name, identifier)
VALUES
    ('3M', '45985371000108'),
    ('Parker', '54823455000136'),
    ('Flowserve', '33273681000110');

-- LOCATION
INSERT INTO
    location (name, description)
VALUES
    (
        'Depósito principal',
        'Próximo à escada central da embarcação'
    ),
    (
        'Almoxarifado técnico',
        'Ao lado da sala de controle'
    ),
    (
        'Sala de máquinas',
        'Próxima aos painéis principais'
    );

-- ITEM
INSERT INTO
    item (name, manufacturer_id, category_id)
VALUES
    ('Capacete', 1, 1),
    ('Mangueira hidráulica', 2, 2),
    ('Bomba de transferência de óleo', 3, 3);

-- STOCK
INSERT INTO
    stock (item_id, quantity, location_id)
VALUES
    (1, 120, 1),
    (2, 45, 2),
    (3, 8, 3);