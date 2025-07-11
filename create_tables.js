export async function createTables(pool) {
    await pool.query(`
          CREATE TABLE IF NOT EXISTS customers (
              id UUID PRIMARY KEY,
              first_name VARCHAR(100),
              last_name VARCHAR(100),
              birth_date DATE,
              state VARCHAR(100),
              email VARCHAR(255) UNIQUE
          );
      `);

    await pool.query(`
          DO $$
          BEGIN
              IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'purchase_status') THEN
                  CREATE TYPE purchase_status AS ENUM (
                      'confirmada',
                      'pagamento confirmado',
                      'em separação',
                      'em transporte',
                      'entregue',
                      'atrasada',
                      'cancelada pelo usuário',
                      'cancelada pelo vendedor'
                  );
              END IF;
          END$$;

          CREATE TABLE IF NOT EXISTS purchases (
              id SERIAL PRIMARY KEY,
              customer_id UUID REFERENCES customers(id),
              product VARCHAR(255),
              price NUMERIC(10,2),
              date TIMESTAMP,
              status purchase_status
          );
      `);
  }
