const app = require("premierepro");
const uxp = require("uxp");

// ---------------------------------------------------------------------------
// Feature handlers
// ---------------------------------------------------------------------------

const featureHandlers = {
  silences: () => console.log("Remove silences"),
  fillers: () => console.log("Remove fillers"),
  repetition: () => console.log("Remove repetition"),
  profanity: () => console.log("Remove profanity"),
  zooms: () => console.log("Add zooms"),
  chapters: () => console.log("Add chapters"),
  captions: () => console.log("Add captions"),
  voiceover: () => console.log("Add voiceover"),
  titles: () => console.log("Add titles"),
  broll: () => console.log("Find B-roll"),
  music: () => console.log("Find music"),
  multitrack: () => console.log("Multi-track"),
  highlights: () => console.log("Create highlights"),
  workflows: () => console.log("Workflows"),
};

// ---------------------------------------------------------------------------
// jQuery UI wiring
// ---------------------------------------------------------------------------

$(function () {
  $(".feature-card").on("click", function () {
    const feature = $(this).data("feature");
    if (featureHandlers[feature]) featureHandlers[feature]();
  });

  $("#btn-undo").on("click", async () => {
    try {
      const project = await app.Project.getActiveProject();
      await project.undo();
    } catch (err) {
      console.error("Undo failed:", err);
    }
  });

  $("#btn-reload").on("click", () => location.reload());

  $("#btn-feedback").on("click", () => console.log("Open feedback"));
  $("#btn-settings").on("click", () => console.log("Open settings"));
  $("#btn-help").on("click", () => console.log("Open help"));
  $("#btn-notif").on("click", () => console.log("Open notifications"));
});

(async function () {
  const appVersion = await app.Project.getActiveProject();
  // console.log(`Running in Premiere Pro version ${appVersion}`);
  // console.dir(app, {
  //   depth: null,
  // });

  const sequence = await app.Project.getActiveSequence();

  console.dir(sequence, {
    depth: null,
  });

  const transitionFactory =
    await app.TransitionFactory.getVideoTransitionMatchNames();

  // console.dir(transitionFactory);

  const videoFilterFactory = await app.VideoFilterFactory.getMatchNames();

  // console.dir(videoFilterFactory);

  const count = sequence.getVideoTrackCount();

  console.dir(count);
})();

// ---------------------------------------------------------------------------
// UXP entrypoints
// ---------------------------------------------------------------------------

uxp.entrypoints.setup({
  panels: {
    samplePlugin: {
      show() {},
    },
  },
  commands: {
    show_alert: {
      run: async (event) => {
        console.log("show_alert triggered", event);
      },
      cancel: async (event) => {
        console.log("show_alert cancelled", event);
      },
    },
  },
});
