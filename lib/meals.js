import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // throw new Error("Loading failed");
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(meal) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(meal);
}

export function saveMeal(meal) {
  const slug = slugify(meal.title, { lower: true });
  const instructions = xss(meal.instructions);
}
