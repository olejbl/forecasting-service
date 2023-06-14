export default function Page({ params }: { params: { slug: string } }) {
  return <div>City: {params.slug}</div>
}
