exports.up = async function (knex) {
  await knex.schema.createTable("books", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));

    table.string("title").notNullable();
    table.string("author").notNullable();
    table.text("content");

    table.timestamp(true, true);
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("books");
};
