globalThis.database = globalThis.database ?? {
  count: 0
}

export async function onCounterIncrement() {
  database.count = database.count + 1
  return database.count
}

export async function onLoad() {
  return database.count
}
