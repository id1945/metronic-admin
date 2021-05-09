import React from "react";
import {Tab, Tabs, Nav, Col, Row} from "react-bootstrap";
import {Notice, KTCodeExample} from "../../../_metronic/_partials/controls";

class ControlledTabs extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: "home"
    };
  }

  render() {
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={this.state.key}
        onSelect={key => this.setState({ key })}
      >
        <Tab eventKey="home" title="Home">
          Be wise as thou art cruel; do not press My tongue-tied patience with
          too much disdain; Lest sorrow lend me words, and words express The
          manner of my pity-wanting pain. If I might teach thee wit, better it
          were, Though not to love, yet, love to tell me so;-- As testy sick
          men, when their deaths be near, No news but health from their
          physicians know;-- For, if I should despair, I should grow mad, And in
          my madness might speak ill of thee;
        </Tab>
        <Tab eventKey="profile" title="Profile">
          For shame! deny that thou bear'st love to any, Who for thy self art so
          unprovident. Grant, if thou wilt, thou art belov'd of many, But that
          thou none lov'st is most evident: For thou art so possess'd with
          murderous hate, That 'gainst thy self thou stick'st not to conspire,
          Seeking that beauteous roof to ruinate Which to repair should be thy
          chief desire. O! change thy thought, that I may change my mind: Shall
          hate be fairer lodg'd than gentle love?
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled></Tab>
      </Tabs>
    );
  }
}

export default class TabsExamplesPage extends React.Component {
  render() {
    return (
      <>
        <Notice icon="flaticon-warning font-primary">
          <span>Dynamic tabbed interfaces.</span>
          <span>
            For more info please check the components's official{" "}
            <a
              target="_blank"
              className="font-weight-bold"
              rel="noopener noreferrer"
              href="https://react-bootstrap.github.io/components/tabs/"
            >
              demos & documentation
            </a>
          </span>
        </Notice>

        <div className="row">
          <div className="col-md-6">
            <KTCodeExample jsCode={jsCode1} beforeCodeTitle="Basic Example">
              <span>
                Create dynamic tabbed interfaces, as described in the WAI ARIA
                Authoring Practices.
                <code>Tabs</code> is a higher-level component for quickly
                creating a <code>Nav</code> matched with a set of{" "}
                <code>TabPane</code>s.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Home">
                  How can I then return in happy plight, That am debarre'd the
                  benefit of rest? When day's oppression is not eas'd by night,
                  But day by night and night by day oppress'd, And each, though
                  enemies to either's reign, Do in consent shake hands to
                  torture me, The one by toil, the other to complain How far I
                  toil, still farther off from thee. I tell the day, to please
                  him thou art bright, And dost him grace when clouds do blot
                  the heaven:
                </Tab>
                <Tab eventKey="profile" title="Profile">
                  How sweet and lovely dost thou make the shame Which, like a
                  canker in the fragrant rose, Doth spot the beauty of thy
                  budding name! O! in what sweets dost thou thy sins enclose.
                  That tongue that tells the story of thy days, Making
                  lascivious comments on thy sport, Cannot dispraise, but in a
                  kind of praise; Naming thy name, blesses an ill report. O!
                  what a mansion have those vices got Which for their habitation
                  chose out thee,
                </Tab>
                <Tab eventKey="contact" title="Contact" disabled></Tab>
              </Tabs>
            </KTCodeExample>

            <KTCodeExample jsCode={jsCode3} beforeCodeTitle="No animation">
              <span>
                Set the <code>transition</code> prop to <code>false</code>
              </span>
              <div className="separator separator-dashed my-7"></div>
              <Tabs
                defaultActiveKey="home"
                transition={false}
                id="noanim-tab-example"
              >
                <Tab eventKey="home" title="Home">
                  Those parts of thee that the world's eye doth view Want
                  nothing that the thought of hearts can mend; All tongues--the
                  voice of souls--give thee that due, Uttering bare truth, even
                  so as foes commend. Thy outward thus with outward praise is
                  crown'd; But those same tongues, that give thee so thine own,
                  In other accents do this praise confound By seeing farther
                  than the eye hath shown. They look into the beauty of thy
                  mind, And that in guess they measure by thy deeds;
                </Tab>
                <Tab eventKey="profile" title="Profile">
                  Being your slave what should I do but tend, Upon the hours,
                  and times of your desire? I have no precious time at all to
                  spend; Nor services to do, till you require. Nor dare I chide
                  the world-without-end hour, Whilst I, my sovereign, watch the
                  clock for you, Nor think the bitterness of absence sour, When
                  you have bid your servant once adieu; Nor dare I question with
                  my jealous thought Where you may be, or your affairs suppose,
                </Tab>
                <Tab eventKey="contact" title="Contact" disabled></Tab>
              </Tabs>
            </KTCodeExample>
          </div>
          <div className="col-md-6">
            <KTCodeExample jsCode={jsCode2} beforeCodeTitle="Controlled">
              <span>
                <code>Tabs</code> can be controlled directly when you want to
                handle the selection logic personally.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <ControlledTabs />
            </KTCodeExample>

            <KTCodeExample jsCode={jsCode4} beforeCodeTitle="Custom Tab Layout">
              <span>
                For more complex layouts the flexible <code>TabContainer</code>,{" "}
                <code>TabContent</code>, and <code>TabPane</code> components
                along with any style of <code>Nav</code> allow you to quickly
                piece together your own Tabs component with additional markup
                needed.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={9}>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        Let those who are in favour with their stars Of public
                        honour and proud titles boast, Whilst I, whom fortune of
                        such triumph bars Unlook'd for joy in that I honour
                        most. Great princes' favourites their fair leaves spread
                        But as the marigold at the sun's eye, And in themselves
                        their pride lies buried, For at a frown they in their
                        glory die. The painful warrior famoused for fight, After
                        a thousand victories once foil'd,
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        Thy gift, thy tables, are within my brain Full
                        character'd with lasting memory, Which shall above that
                        idle rank remain, Beyond all date; even to eternity: Or,
                        at the least, so long as brain and heart Have faculty by
                        nature to subsist; Till each to raz'd oblivion yield his
                        part Of thee, thy record never can be miss'd. That poor
                        retention could not so much hold, Nor need I tallies thy
                        dear love to score;
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </KTCodeExample>
          </div>
        </div>
      </>
    );
  }
}

const jsCode1 = `
<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="home" title="Home">
    <Sonnet />
  </Tab>
  <Tab eventKey="profile" title="Profile">
    <Sonnet />
  </Tab>
  <Tab eventKey="contact" title="Contact" disabled>
    <Sonnet />
  </Tab>
</Tabs>
`;
const jsCode2 = `
class ControlledTabs extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: 'home',
    };
  }

  render() {
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={this.state.key}
        onSelect={key => this.setState({ key })}
      >
        <Tab eventKey="home" title="Home">
          <Sonnet />
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <Sonnet />
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
          <Sonnet />
        </Tab>
      </Tabs>
    );
  }
}

render(<ControlledTabs />);
`;
const jsCode3 = `
<Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
  <Tab eventKey="home" title="Home">
    <Sonnet />
  </Tab>
  <Tab eventKey="profile" title="Profile">
    <Sonnet />
  </Tab>
  <Tab eventKey="contact" title="Contact" disabled>
    <Sonnet />
  </Tab>
</Tabs>
`;
const jsCode4 = `
<Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Tab 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Tab 2</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
          <Sonnet />
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <Sonnet />
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
`;
