<script>
export default {
  name: 'Redirect',
  created() {
    const hash = window.location.search.slice(1);
    window.opener.location.href = `${window.location.origin}/singin#${hash}`;
    window.close();
  },
};
</script>
