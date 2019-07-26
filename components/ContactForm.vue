<template>
  <div>
    <h2 class="subtitle is-4">Send a message</h2>
    <form>
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="e.g John Smith">
        </div>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
          <input
            class="input"
            type="email"
            placeholder="e.g John@mail.com">
          <span class="icon is-small is-left">
            <i class="fa fa-envelope" />
          </span>
        </div>
      </div>

      <div class="field">
        <label class="label">Subject</label>
        <div class="control">
          <div class="select">
            <select>
              <option>Select dropdown</option>
              <option>Sales</option>
              <option>Solution information</option>
              <option>Job opportunities</option>
              <option>Co-operation</option>
              <option>Other</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea
            class="textarea"
            placeholder="Your enquiry here ..." />
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Send message</button>
        </div>
        <div class="control">
          <button class="button is-text">Cancel</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactForm'
}
</script>
