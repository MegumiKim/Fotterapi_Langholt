<script>

const reviews = [
  {comment: "Fantastisk fotterapi! Føttene mine har aldri føltes bedre.", by: "Kari"},
  {comment: "Profesjonell og vennlig service. Anbefales på det sterkeste!", by: "Anders"},
  {comment: "Utrolig fornøyd med behandlingen. Kommer definitivt tilbake!", by: "Linda"}
]
</script>


<section class="container">
<div class="flex">
  {#each reviews as review}
    <blockquote class="review-card">
  <p class="comment">{review.comment}</p>
  <p class="by-line"> - {review.by}</p>
      </blockquote>
  {/each}
</div>
</section>

<style lang="scss">
.flex {
  gap: 0;
}
  .review-card{
    background-color: rgb(251, 245, 236);
    padding:1em;
border-radius: 20px;

  
.comment {
  font-style: italic;
}

.by-line {
  text-align: end;
  margin-top: 0.5em;
  margin-end: 1em;
}

  }
</style>

