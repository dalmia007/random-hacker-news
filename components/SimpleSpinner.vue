<template>
  <div>
    <svg
      width="300px"
      height="300px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      style="background: none"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        :ng-attr-stroke="`${color}`"
        :stroke="`${color}`"
        stroke-width="2"
        r="10"
        stroke-dasharray="47.12388980384689 17.707963267948966"
        transform="rotate(285.206 50 50)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="linear"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
          dur="1.3s"
          begin="0s"
          repeatCount="indefinite"
        ></animateTransform>
      </circle>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'SimpleSpinner',
  props: {
    color: { default: '#000000', type: String },
  },
}
</script>

<style></style>
