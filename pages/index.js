import WeaveDB from "weavedb-sdk"

export default function Home() {
  const start = async () => {
    const db = new WeaveDB({
      contractTxId: "lw6VLVDlormmUE-iTQRSabBuPn7U_DnSI1xknWfv3zI",
    })
    await db.init()

    const dbData = await db.get("Questions")
    console.log("dbData", dbData)
  }
  return (
    <>
      <button onClick={start}>Start</button>
    </>
  )
}
