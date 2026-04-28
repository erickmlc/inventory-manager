-- CATEGORY
CREATE TABLE
    category (
        id BIGSERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description VARCHAR(255)
    );

-- MANUFACTURER
CREATE TABLE
    manufacturer (
        id BIGSERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        identifier VARCHAR(15) UNIQUE NOT NULL
    );

-- LOCATION
CREATE TABLE
    location (
        id BIGSERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description VARCHAR(255)
    );

-- ITEM
CREATE TABLE
    item (
        id BIGSERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        manufacturer_id BIGINT NOT NULL,
        category_id BIGINT NOT NULL,
        CONSTRAINT fk_item_manufacturer FOREIGN KEY (manufacturer_id) REFERENCES manufacturer (id),
        CONSTRAINT fk_item_category FOREIGN KEY (category_id) REFERENCES category (id)
    );

-- STOCK
CREATE TABLE
    stock (
        id BIGSERIAL PRIMARY KEY,
        item_id BIGINT NOT NULL,
        location_id BIGINT NOT NULL,
        quantity INTEGER NOT NULL CHECK (quantity >= 0),
        CONSTRAINT fk_stock_item FOREIGN KEY (item_id) REFERENCES item (id),
        CONSTRAINT fk_stock_location FOREIGN KEY (location_id) REFERENCES location (id),
        CONSTRAINT uq_item_location UNIQUE (item_id, location_id)
    );
