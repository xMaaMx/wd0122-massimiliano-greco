export async function getPosts(){
  return await (await fetch("assets/db.json")).json()

  /*
  await fecth()
  return(await fetch ()).json()
  return await (await fetch()).json
    */
}